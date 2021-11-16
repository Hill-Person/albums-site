package org.wcci.apimastery.controllers;

import org.springframework.http.server.RequestPath;
import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.model.Song;
import org.wcci.apimastery.repositories.AlbumRepository;
import org.wcci.apimastery.repositories.SongRepository;

@RestController
@RequestMapping("/songs")
public class SongController {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public SongController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/")
    public Iterable<Song> retrieveAllSongs() {
        return songRepo.findAll();
    }

    @GetMapping("/{id}")
    public Song retrieveSongById(@PathVariable Long id) {
        return songRepo.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public Iterable<Song> deleteSong(@PathVariable Long id) {
        songRepo.deleteById(id);
        return songRepo.findAll();
    }
}
