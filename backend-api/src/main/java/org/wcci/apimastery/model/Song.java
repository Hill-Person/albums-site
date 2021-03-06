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

    @ManyToOne
    @JsonIgnore
    private Album albums;

    @ElementCollection
    private Collection<String> comments;

    public Song(String name, String artist, Album albums, int duration) {
        this.name = name;
        this.artist = artist;
        this.albums = albums;
        this.duration = duration;
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

    public int getDuration() { return duration; }

    public void addAlbum(Album album){
        albums = album;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public void addComment(String comment) {
        comments.add(comment);
    }

}
