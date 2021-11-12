package org.wcci.apimastery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Album {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "albums")
    private Collection<Song> songs;

    public Album(String name, String description) {
        this.name = name;
        this.description = description;
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

    public Collection<Song> getSongs() {
        return songs;
    }
}
