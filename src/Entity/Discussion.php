<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\DiscussionRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: DiscussionRepository::class)]
#[ApiResource(mercure: ['private' => true])]
class Discussion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?DateTime $createdAt = null;

    #[ORM\Column]
    private ?\DateTime $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'discussion', targetEntity: Chat::class)]
    private Collection $chats;

    #[ORM\OneToMany(mappedBy: 'discussion', targetEntity: DiscussionUsers::class)]
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
