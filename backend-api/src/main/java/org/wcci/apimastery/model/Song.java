package org.wcci.apimastery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Song {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String artist;

    @ManyToOne
    @JsonIgnore
    private Album albums;

    public Song(String name, String artist, Album album) {
        this.name = name;
        this.albums = album;
    }

    public Song(){
        //zero argument constructor
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getArtist() {
        return artist;
    }

    public Album getAlbum() {
        return albums;
    }
}
