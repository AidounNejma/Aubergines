<?php

namespace App\Entity;

use App\Repository\ReportRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReportRepository::class)]
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

    #[ORM\OneToMany(mappedBy: 'report', targetEntity: Coment::class)]
    private Collection $coment;

    public function __construct()
    {
        $this->coment = new ArrayCollection();
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
     * @return Collection<int, Coment>
     */
    public function getComent(): Collection
    {
        return $this->coment;
    }

    public function addComent(Coment $coment): self
    {
        if (!$this->coment->contains($coment)) {
            $this->coment->add($coment);
            $coment->setReport($this);
        }

        return $this;
    }

    public function removeComent(Coment $coment): self
    {
        if ($this->coment->removeElement($coment)) {
            // set the owning side to null (unless already changed)
            if ($coment->getReport() === $this) {
                $coment->setReport(null);
            }
        }

        return $this;
    }

}
