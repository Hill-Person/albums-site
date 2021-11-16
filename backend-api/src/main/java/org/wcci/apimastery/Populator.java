package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.model.Album;
import org.wcci.apimastery.model.Song;
import org.wcci.apimastery.repositories.AlbumRepository;
import org.wcci.apimastery.repositories.SongRepository;

@Component
public class Populator implements CommandLineRunner {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public Populator(AlbumRepository albumRepo, SongRepository songRepo){
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Album album1 = new Album("Paranoid", "The Plymouth Rock of heavy rock.", "Black Sabbath");
        albumRepo.save(album1);

        Song paranoid1 = new Song("War Pigs", "Black Sabbath", album1);
        songRepo.save(paranoid1);
        Song paranoid2 = new Song("Paranoid", "Black Sabbath", album1);
        songRepo.save(paranoid2);
        Song paranoid3 = new Song("Planet Caravan", "Black Sabbath", album1);
        songRepo.save(paranoid3);
        Song paranoid4 = new Song("Iron Man", "Black Sabbath", album1);
        songRepo.save(paranoid4);
        Song paranoid5 = new Song("Electric Funeral", "Black Sabbath", album1);
        songRepo.save(paranoid5);
        Song paranoid6 = new Song("Hand Of Doom", "Black Sabbath", album1);
        songRepo.save(paranoid6);
        Song paranoid7 = new Song("Rat Salad", "Black Sabbath", album1);
        songRepo.save(paranoid7);
        Song paranoid8 = new Song("Fairies Wear Boots", "Black Sabbath", album1);
        songRepo.save(paranoid8);

        Album album2 = new Album("Philosophy Of The World", "The Better Beatles.", "The Shaggs");
        albumRepo.save(album2);

        Song shaggs1 = new Song("Philosophy Of The World", "The Shaggs", album2);
        songRepo.save(shaggs1);
        Song shaggs2 = new Song("That Little Sports Car", "The Shaggs", album2);
        songRepo.save(shaggs2);
        Song shaggs3 = new Song("Who Are Parents?", "The Shaggs", album2);
        songRepo.save(shaggs3);
        Song shaggs4 = new Song("My Pal Foot Foot", "The Shaggs", album2);
        songRepo.save(shaggs4);
        Song shaggs5 = new Song("My Companion", "The Shaggs", album2);
        songRepo.save(shaggs5);
        Song shaggs6 = new Song("I'm So Happy When You're Near", "The Shaggs", album2);
        songRepo.save(shaggs6);
        Song shaggs7 = new Song("Things I Wonder", "The Shaggs", album2);
        songRepo.save(shaggs7);
        Song shaggs8 = new Song("Sweet Thing", "The Shaggs", album2);
        songRepo.save(shaggs8);
        Song shaggs9 = new Song("It's Halloween", "The Shaggs", album2);
        songRepo.save(shaggs9);
        Song shaggs10 = new Song("Why Do I Feel?", "The Shaggs", album2);
        songRepo.save(shaggs10);
        Song shaggs11 = new Song("What Should I Do?", "The Shaggs", album2);
        songRepo.save(shaggs11);
        Song shaggs12 = new Song("We Have A Savior", "The Shaggs", album2);
        songRepo.save(shaggs12);

    }
}
