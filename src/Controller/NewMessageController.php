<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;

class NewMessageController extends AbstractController
{
    public function newMessage(HubInterface $hub): Response
    {
        $update = new Update(
            'https://schema.org/Chat',
            json_encode(['status' => 'received'])
        );

        $hub->publish($update);

        return new Response('published!');
    }
}