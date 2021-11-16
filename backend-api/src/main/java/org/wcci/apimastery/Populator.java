package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.model.Album;
import org.wcci.apimastery.model.Song;
import org.wcci.apimastery.repositories.AlbumRepository;
import org.wcci.apimastery.repositories.SongRepository;

import java.util.Collection;

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
        Album album1 = new Album("Paranoid", "The Plymouth Rock of heavy rock.", "Black Sabbath", " ");
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

        Album album2 = new Album("Philosophy Of The World", "The Better Beatles.", "The Shaggs", " ");
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

        Album album3 = new Album("198XAD", "Electronic music", "Mega Drive", " ");
        albumRepo.save(album3);

        Song megadrive1 = new Song("Infiltrate", "Mega Drive", album3);
        songRepo.save(megadrive1);
        Song megadrive2 = new Song("Acid Spit", "Mega Drive", album3);
        songRepo.save(megadrive2);
        Song megadrive3 = new Song("NARC", "Mega Drive", album3);
        songRepo.save(megadrive3);
        Song megadrive4 = new Song("Memory Dealer", "Mega Drive", album3);
        songRepo.save(megadrive4);
        Song megadrive5 = new Song("Osaka Sewers", "Mega Drive", album3);
        songRepo.save(megadrive5);
        Song megadrive6 = new Song("Exoskeleton", "Mega Drive", album3);
        songRepo.save(megadrive6);
        Song megadrive7 = new Song("Murderlize 'em", "Mega drive", album3);
        songRepo.save(megadrive7);
        Song megadrive8 = new Song("Haunted(Hunted)", "Mega Drive", album3);
        songRepo.save(megadrive8);
        Song megadrive9 = new Song("Edge of Reality", "Mega Drive", album3);
        songRepo.save(megadrive9);
        Song megadrive10 = new Song("Video Stalker", "Mega Drive", album3);
        songRepo.save(megadrive10);
        Song megadrive11 = new Song("The Reducer", "Mega Drive", album3);
        songRepo.save(megadrive11);
        Song megadrive12 = new Song("Slum Lord", "Mega Drive", album3);
        songRepo.save(megadrive12);
        Song megadrive13 = new Song("Zero Point Non-Response", "Mega Drive", album3);
        songRepo.save(megadrive13);
        Song megadrive14 = new Song("Only One", "Mega Drive", album3);
        songRepo.save(megadrive14);

        Album album4 = new Album("Zuma", "Classic Rock", "Neil Young", " ");
        albumRepo.save(album4);

        Song neilyoung1 = new Song("Don't Cry No Tears", "Neil Young", album4);
        songRepo.save(neilyoung1);
        Song neilyoung2 = new Song("Danger Bird", "Neil Young", album4);
        songRepo.save(neilyoung2);
        Song neilyoung3 = new Song("Pardon My Heart", "Neil Young", album4);
        songRepo.save(neilyoung3);
        Song neilyoung4 = new Song("Lookin' For Love", "Neil Young", album3);
        songRepo.save(neilyoung4);
        Song neilyoung5 = new Song("Osaka Sewers", "Neil Young", album4);
        songRepo.save(neilyoung5);
        Song neilyoung6 = new Song("Exoskeleton", "Neil Young", album4);
        songRepo.save(neilyoung6);
        Song neilyoung7 = new Song("Murderlize 'em", "Neil Young", album4);
        songRepo.save(neilyoung7);
        Song neilyoung8 = new Song("Haunted(Hunted)", "Neil Young", album4);
        songRepo.save(neilyoung8);
        Song neilyoung9 = new Song("Edge of Reality", "Neil Young", album4);
        songRepo.save(neilyoung9);


    }
}
