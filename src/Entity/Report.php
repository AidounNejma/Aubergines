<?php

namespace App\Entity;

use App\Repository\ReportRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: ReportRepository::class)]
#[ApiResource]
class Report
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'reports')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'reports')]
    private ?Post $post = null;

    #[ORM\OneToMany(mappedBy: 'report', targetEntity: Comment::class)]
    private Collection $Comment;

    public function __construct()
    {
        $this->Comment = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComment(): Collection
    {
        return $this->Comment;
    }

    public function addComment(Comment $Comment): self
    {
        if (!$this->Comment->contains($Comment)) {
            $this->Comment->add($Comment);
            $Comment->setReport($this);
        }

        return $this;
    }

    public function removeComment(Comment $Comment): self
    {
        if ($this->Comment->removeElement($Comment)) {
            // set the owning side to null (unless already changed)
            if ($Comment->getReport() === $this) {
                $Comment->setReport(null);
            }
        }

        return $this;
    }

}
