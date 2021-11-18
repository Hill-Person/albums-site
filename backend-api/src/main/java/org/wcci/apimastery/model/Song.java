package org.wcci.apimastery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String artist;
    private int duration;
    private String songRating;


    @ManyToOne
    @JsonIgnore
    private Album albums;

    @ElementCollection
    private Collection<String> comments;

    public Song(String name, String artist, Album albums, int minutes, int seconds, String songRating) {
        this.name = name;
        this.artist = artist;
        this.albums = albums;
        this.duration = minutes * 60 + seconds;
        this.songRating = songRating;
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

    public int getDuration() {
        return duration;
    }

    public void addAlbum(Album album){
        albums = album;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public void addComment(String comment) {
        comments.add(comment);
    }

    public String getSongRating() {
        return songRating;
    }
}
