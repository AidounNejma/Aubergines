<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220922135714 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE Comment DROP post_id, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Comment ADD CONSTRAINT FK_F86E9D2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_F86E9D2A76ED395 ON Comment (user_id)');
        $this->addSql('ALTER TABLE post ADD Comment_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8D632B4AD1 FOREIGN KEY (Comment_id) REFERENCES Comment (id)');
        $this->addSql('CREATE INDEX IDX_5A8A6C8D632B4AD1 ON post (Comment_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE Comment DROP FOREIGN KEY FK_F86E9D2A76ED395');
        $this->addSql('DROP INDEX IDX_F86E9D2A76ED395 ON Comment');
        $this->addSql('ALTER TABLE Comment ADD post_id INT NOT NULL, CHANGE user_id user_id INT NOT NULL');
        $this->addSql('ALTER TABLE post DROP FOREIGN KEY FK_5A8A6C8D632B4AD1');
        $this->addSql('DROP INDEX IDX_5A8A6C8D632B4AD1 ON post');
        $this->addSql('ALTER TABLE post DROP Comment_id');
    }
}
