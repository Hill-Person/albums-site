package org.wcci.apimastery.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Album {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String artist;
    private String imgUrl;
    private String label;

    @OneToMany(mappedBy = "albums" , cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Song> songs;

    public Album(String name, String description, String artist, String imgUrl, String label) {
        this.name = name;
        this.description = description;
        this.artist = artist;
        this.label = label;
    }

    protected Album(){
        //zero argument constructor
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getArtist() {
        return artist;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public Collection<Song> getSongs() {
        return songs;
    }
    public String getLabel() {
        return label;
    }


}
