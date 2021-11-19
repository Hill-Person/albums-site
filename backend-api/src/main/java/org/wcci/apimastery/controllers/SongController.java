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


    @PatchMapping("/{id}")
    public Song addComment(@PathVariable Long id, @RequestBody String userComment) {
        Song currentSong = songRepo.findById(id).get();
        currentSong.addComment(userComment);
        songRepo.save(currentSong);
        return currentSong;
    }

    @DeleteMapping("/{id}")
    public Iterable<Song> deleteSong(@PathVariable Long id) {
        songRepo.deleteById(id);
        return songRepo.findAll();
    }

    @PutMapping
    public Iterable<Song> editSong(@RequestBody Song songToEdit) {
        if (songToEdit.getId() !=null) {
            songRepo.save(songToEdit);
        }
        return songRepo.findAll();
    }
}
