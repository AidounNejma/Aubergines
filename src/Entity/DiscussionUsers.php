<?php

namespace App\Entity;

use App\Entity\DiscussionUsers;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\DiscussionUsersRepository;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DiscussionUsersRepository::class)]
#[ApiResource(
    types: ['https://schema.org/DiscussionUsers'],
    normalizationContext: ['groups' => ['discussion_users:read']],
    paginationClientItemsPerPage: true,
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact', 'discussion'=> 'exact'])]
#[ApiFilter(PropertyFilter::class)]
class DiscussionUsers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['discussion_users:read', 'user:read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'discussionUsers')]
    #[Groups(['discussion_users:read', 'user:read'])]
    #[ApiFilter(SearchFilter::class, strategy: 'exact')]
    private ?Discussion $discussion = null;

    #[ORM\ManyToOne(inversedBy: 'discussionUsers')]
    #[Groups(['discussion_users:read', 'user:read', 'discussion:read'])]
    #[ApiFilter(SearchFilter::class, strategy: 'exact')]
    #[ApiProperty(types: ['https://schema.org/user'])]
    private ?User $user = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiscussion(): ?Discussion
    {
        return $this->discussion;
    }

    public function setDiscussion(?Discussion $discussion): self
    {
        $this->discussion = $discussion;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}
