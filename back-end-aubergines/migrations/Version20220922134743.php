<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220922134743 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coment ADD report_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE coment ADD CONSTRAINT FK_F86E9D24BD2A4C0 FOREIGN KEY (report_id) REFERENCES report (id)');
        $this->addSql('CREATE INDEX IDX_F86E9D24BD2A4C0 ON coment (report_id)');
        $this->addSql('ALTER TABLE report DROP coment_id, CHANGE user_id user_id INT DEFAULT NULL, CHANGE post_id post_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE report ADD CONSTRAINT FK_C42F7784A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE report ADD CONSTRAINT FK_C42F77844B89032C FOREIGN KEY (post_id) REFERENCES post (id)');
        $this->addSql('CREATE INDEX IDX_C42F7784A76ED395 ON report (user_id)');
        $this->addSql('CREATE INDEX IDX_C42F77844B89032C ON report (post_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coment DROP FOREIGN KEY FK_F86E9D24BD2A4C0');
        $this->addSql('DROP INDEX IDX_F86E9D24BD2A4C0 ON coment');
        $this->addSql('ALTER TABLE coment DROP report_id');
        $this->addSql('ALTER TABLE report DROP FOREIGN KEY FK_C42F7784A76ED395');
        $this->addSql('ALTER TABLE report DROP FOREIGN KEY FK_C42F77844B89032C');
        $this->addSql('DROP INDEX IDX_C42F7784A76ED395 ON report');
        $this->addSql('DROP INDEX IDX_C42F77844B89032C ON report');
        $this->addSql('ALTER TABLE report ADD coment_id INT NOT NULL, CHANGE user_id user_id INT NOT NULL, CHANGE post_id post_id INT NOT NULL');
    }
}
