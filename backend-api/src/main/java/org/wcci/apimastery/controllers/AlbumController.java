package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.model.Album;
import org.wcci.apimastery.model.Song;
import org.wcci.apimastery.repositories.AlbumRepository;
import org.wcci.apimastery.repositories.SongRepository;

import java.util.Optional;

@RestController
@RequestMapping("/albums")
public class AlbumController {

    private SongRepository songRepo;
    private AlbumRepository albumRepo;

    public AlbumController(SongRepository songRepo, AlbumRepository albumRepo) {
        this.songRepo = songRepo;
        this.albumRepo = albumRepo;
    }

    @GetMapping("/")
    public Iterable<Album> retrieveAllAlbums(){
        return albumRepo.findAll();
    }

    @GetMapping("/{id}")
    public Album retrieveSingleAlbum(@PathVariable Long id){
        return albumRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Album> addAlbum (@RequestBody Album albumToAdd) {
        albumRepo.save(albumToAdd);
        return albumRepo.findAll();
    }

    @PatchMapping("/{id}")
    public Iterable<Song> addSong(@RequestBody Song songToAdd, @PathVariable Long id) {
        Optional<Album> currentAlbum = albumRepo.findById(id);
        songToAdd.addAlbum(currentAlbum.get());

        songRepo.save(songToAdd);
        albumRepo.save(currentAlbum.get());
        return songRepo.findAll();
    }

    @DeleteMapping("/{id}")
    public Iterable<Album> deleteAlbum(@PathVariable Long id) {
        albumRepo.deleteById(id);
        return albumRepo.findAll();
    }

}
