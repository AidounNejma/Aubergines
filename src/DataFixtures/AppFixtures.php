<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AppFixtures extends Fixture
{
    /**
     * L'encodeur de mots de passe
     *
     * @var UserPasswordHasherInterface
     */
    private $encoder;

    public function __construct(UserPasswordHasherInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        for ($u = 0; $u < 10; $u++) {
            $user = new User();

            $chrono = 1;

            $hash = $this->encoder->hashPassword($user, "password");

            $user->setName($faker->firstName)
                ->setUsername($faker->lastName)
                ->setEmail($faker->email)
                ->setPassword($hash)
                ->setUserPictures($faker->imageUrl($width = 640, $height = 480))
                ->setRoles('ROLE_USER');

            $manager->persist($user);

            for ($p = 0; $p < mt_rand(5, 20); $p++) {
                $post = new Post();
                $post->setTitle($faker->realText($maxNbChars = 50, $indexSize = 2))
                    ->setContent($faker->realText($maxNbChars = 200, $indexSize = 2))
                    ->setPicturesPost($faker->imageUrl($width = 640, $height = 480))
                    ->setPublished(1)
                    ->setUser($user);


                $manager->persist($post);

            }
        }

        $manager->flush();
    }
}
