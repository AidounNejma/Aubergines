<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\DiscussionRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DiscussionRepository::class)]
#[ApiResource(
    types: ['https://schema.org/Discussion'],
    normalizationContext: ['groups' => ['discussion:read']],
    paginationClientItemsPerPage: true,
)]
#[ApiFilter(PropertyFilter::class)]
class Discussion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['discussion_users:read', 'discussion:read'])]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups(['discussion:read'])]
    private ?DateTime $createdAt = null;

    #[ORM\Column]
    #[Groups(['discussion:read'])]
    private ?\DateTime $updatedAt = null;

    #[Groups(['discussion:read'])]
    #[ORM\OneToMany(mappedBy: 'discussion', targetEntity: Chat::class)]
    private Collection $chats;

    
    #[ORM\OneToMany(mappedBy: 'discussion', targetEntity: DiscussionUsers::class)]
    #[Groups(['discussion:read'])]
    private Collection $discussionUsers;

    public function __construct()
    {
        $this->chats = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
        $this->discussionUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, Chat>
     */
    public function getChats(): Collection
    {
        return $this->chats;
    }

    public function addChat(Chat $chat): self
    {
        if (!$this->chats->contains($chat)) {
            $this->chats->add($chat);
            $chat->setDiscussion($this);
        }

        return $this;
    }

    public function removeChat(Chat $chat): self
    {
        if ($this->chats->removeElement($chat)) {
            // set the owning side to null (unless already changed)
            if ($chat->getDiscussion() === $this) {
                $chat->setDiscussion(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, DiscussionUsers>
     */
    public function getDiscussionUsers(): Collection
    {
        return $this->discussionUsers;
    }

    public function addDiscussionUser(DiscussionUsers $discussionUser): self
    {
        if (!$this->discussionUsers->contains($discussionUser)) {
            $this->discussionUsers->add($discussionUser);
            $discussionUser->setDiscussion($this);
        }

        return $this;
    }

    public function removeDiscussionUser(DiscussionUsers $discussionUser): self
    {
        if ($this->discussionUsers->removeElement($discussionUser)) {
            // set the owning side to null (unless already changed)
            if ($discussionUser->getDiscussion() === $this) {
                $discussionUser->setDiscussion(null);
            }
        }

        return $this;
    }
}
