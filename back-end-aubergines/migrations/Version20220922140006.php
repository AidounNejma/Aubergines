<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220922140006 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE discussion_users CHANGE user_id user_id INT DEFAULT NULL, CHANGE discussion_id discussion_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE discussion_users ADD CONSTRAINT FK_DB1C5EDCA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE discussion_users ADD CONSTRAINT FK_DB1C5EDC1ADED311 FOREIGN KEY (discussion_id) REFERENCES discussion (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_DB1C5EDCA76ED395 ON discussion_users (user_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_DB1C5EDC1ADED311 ON discussion_users (discussion_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE discussion_users DROP FOREIGN KEY FK_DB1C5EDCA76ED395');
        $this->addSql('ALTER TABLE discussion_users DROP FOREIGN KEY FK_DB1C5EDC1ADED311');
        $this->addSql('DROP INDEX UNIQ_DB1C5EDCA76ED395 ON discussion_users');
        $this->addSql('DROP INDEX UNIQ_DB1C5EDC1ADED311 ON discussion_users');
        $this->addSql('ALTER TABLE discussion_users CHANGE user_id user_id INT NOT NULL, CHANGE discussion_id discussion_id INT NOT NULL');
    }
}
