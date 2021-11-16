package org.wcci.apimastery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Collection;
import java.util.List;

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

    private Collection<String> comments;

    public Song(String name, String artist, Album albums) {
        this.name = name;
        this.artist = artist;
        this.albums = albums;
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

    public void addAlbum(Album album){
        albums = album;
    }

    public Collection<String> getComments() {
        return comments;
    }
}
