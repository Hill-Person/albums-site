package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.model.Album;
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
}
