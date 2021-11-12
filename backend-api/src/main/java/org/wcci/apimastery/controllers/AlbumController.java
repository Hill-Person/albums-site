package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.model.Album;
import org.wcci.apimastery.model.Song;
import org.wcci.apimastery.repositories.AlbumRepository;
import org.wcci.apimastery.repositories.SongRepository;

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
    public Iterable<Album> addAlbum(@RequestBody Album addAlbum){
        albumRepo.save(addAlbum);
        return albumRepo.findAll();
    }

//    @PostMapping("/")
//    public Album addSong(@RequestBody Song addSong, @PathVariable long id) {
//
//        songRepo.save(addSong);
//        return albumRepo.findById(id).get();
//    }



}
