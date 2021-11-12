package org.wcci.apimastery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
//import javax.persistence.*;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String artist;

    @ManyToOne
    @JsonIgnore
    private Album albums;

    public Song(String name, String artist, Album album) {
        this.name = name;
        this.artist = artist;
        this.albums = album;
    }

    protected Song(){
        //zero argument constructor
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getArtist() {
        return artist;
    }

    public Album getAlbums() {
        return albums;
    }
}
