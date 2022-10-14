<?php

namespace App\Entity;

use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ChatRepository;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ChatRepository::class)]
#[ApiResource(
    types: ['https://schema.org/Chat'],
    normalizationContext: ['groups' => ['chat:read']],
    paginationClientItemsPerPage: true,
    mercure: ['private' => true]
)]

class Chat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['discussion:read', 'chat:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['discussion:read', 'chat:read'])]
    private ?string $pseudo = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['discussion:read', 'chat:read'])]
    private ?string $content = null;

    #[ORM\Column]
    #[Groups(['discussion:read', 'chat:read'])]
    private ?\DateTime $createdAt = null;

    #[ORM\Column]
    #[Groups(['discussion:read', 'chat:read'])]
    private ?DateTime $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'chats')]
    #[Groups(['chat:read', 'discussion:read'])]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'chats')]
    #[Groups(['chat:read'])]
    #[ApiFilter(SearchFilter::class, strategy: 'exact')]
    private ?Discussion $discussion = null;

    public function __construct()
    {
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

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

    public function getDiscussion(): ?Discussion
    {
        return $this->discussion;
    }

    public function setDiscussion(?Discussion $discussion): self
    {
        $this->discussion = $discussion;

        return $this;
    }
}
