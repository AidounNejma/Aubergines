<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use App\Entity\Chat;
use App\Entity\Post;
use App\Entity\User;
use App\Entity\Discussion;
use App\Entity\DiscussionUsers;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
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

        /* Administrateur test */
        $adminTest = new User();

        $password = $this->encoder->hashPassword($adminTest, "password");

        $adminTest->setName("Kristen Mackenzie")
            ->setUsername("Kristen")
            ->setEmail("admin@test.com")
            ->setPassword($password)
            ->setUserBanner($faker->imageUrl($width = 640, $height = 480))
            ->setUserPictures($faker->imageUrl($width = 640, $height = 480))
            ->setRoles(['ROLE_ADMIN']);

        $manager->persist($adminTest);

        /* Utilisateur test */
        $userTest = new User();

        $password = $this->encoder->hashPassword($userTest, "password");

        $userTest->setName("Mily Arthur")
            ->setUsername("Mily")
            ->setEmail("user@test.com")
            ->setPassword($password)
            ->setUserBanner($faker->imageUrl($width = 640, $height = 480))
            ->setUserPictures($faker->imageUrl($width = 640, $height = 480))
            ->setRoles(['ROLE_USER']);

        $manager->persist($userTest);

        for ($p = 0; $p < mt_rand(1, 3); $p++) {
            $post = new Post();
            $post->setTitle($faker->realText($maxNbChars = 50, $indexSize = 2))
                ->setContent($faker->realText($maxNbChars = 200, $indexSize = 2))
                ->setPicturesPost($faker->imageUrl($width = 640, $height = 480))
                ->setPublished(1)
                ->setUser($userTest);


            $manager->persist($post);
        }

        for ($m = 0; $m < mt_rand(2, 3); $m++) {
            $discussion = new Discussion();

            $manager->persist($discussion);

            for ($d = 0; $d < mt_rand(2, 3); $d++) {
                $ds = new DiscussionUsers();
                $ds->setDiscussion($discussion)
                    ->setUser($userTest);

                $manager->persist($ds);
                
                for ($c = 0; $c < mt_rand(5, 20); $c++) {
                    $chat = new Chat();
                    $chat->setPseudo($faker->firstName)
                        ->setContent($faker->realText($maxNbChars = 200, $indexSize = 2))
                        ->setUser($userTest)
                        ->setDiscussion($discussion);
    
                    $manager->persist($chat);
                    
                }
            }
            
        }

        /* 10 utilisateurs */
        for ($u = 0; $u < 10; $u++) {
            $user = new User();

            $chrono = 1;

            $hash = $this->encoder->hashPassword($user, "password");

            $user->setName($faker->firstName)
                ->setUsername($faker->lastName)
                ->setEmail($faker->email)
                ->setPassword($hash)
                ->setUserBanner($faker->imageUrl($width = 640, $height = 480))
                ->setUserPictures($faker->imageUrl($width = 640, $height = 480))
                ->setRoles(['ROLE_USER']);

            $manager->persist($user);

            /* 20 posts */
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
