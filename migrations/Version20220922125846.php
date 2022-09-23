<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220922125846 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact DROP user_id');
        $this->addSql('ALTER TABLE user ADD user_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6499D86650F FOREIGN KEY (user_id_id) REFERENCES contact (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6499D86650F ON user (user_id_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499D86650F');
        $this->addSql('DROP INDEX UNIQ_8D93D6499D86650F ON user');
        $this->addSql('ALTER TABLE user DROP user_id_id');
    }
}
