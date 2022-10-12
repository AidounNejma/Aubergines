<?php

namespace App\Entity;

use App\Repository\DiscussionUsersRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: DiscussionUsersRepository::class)]
#[ApiResource]
class DiscussionUsers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    
}
