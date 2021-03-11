package it.units.entities.support;


public class ResumeForAdmin {

    private String uploader;

    private String nameUploader;

    private String emailUploader;

    private int numDocCaricati;

    private int numConsDiversi;

    public ResumeForAdmin() {
    }

    public ResumeForAdmin(String uploader, String nameUploader, String emailUploader, int numDocCaricati, int numConsDiversi) {
        this.uploader = uploader;
        this.nameUploader = nameUploader;
        this.emailUploader = emailUploader;
        this.numDocCaricati = numDocCaricati;
        this.numConsDiversi = numConsDiversi;
    }

    public String getUploader() {
        return uploader;
    }

    public void setUploader(String uploader) {
        this.uploader = uploader;
    }

    public String getNameUploader() {
        return nameUploader;
    }

    public void setNameUploader(String nameUploader) {
        this.nameUploader = nameUploader;
    }

    public String getEmailUploader() {
        return emailUploader;
    }

    public void setEmailUploader(String emailUploader) {
        this.emailUploader = emailUploader;
    }

    public int getNumDocCaricati() {
        return numDocCaricati;
    }

    public void setNumDocCaricati(int numDocCaricati) {
        this.numDocCaricati = numDocCaricati;
    }

    public int getNumConsDiversi() {
        return numConsDiversi;
    }

    public void setNumConsDiversi(int numConsDiversi) {
        this.numConsDiversi = numConsDiversi;
    }
}