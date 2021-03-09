package it.units.entities.support;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class FromTo {

    private String from;

    private String To;

    public FromTo() {
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return To;
    }

    public void setTo(String to) {
        To = to;
    }
}