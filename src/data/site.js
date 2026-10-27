export const SITE = {
  name: "Sri Palaniyandavar Xerox",
  addressLines: ["40, PKGR Complex, Rajendra Road,", "Palani, Tamil Nadu – 624601"],
  phones: [
    { label: "72002 59009", tel: "+917200259009" },
    { label: "98436 66944", tel: "+919843666944" },
  ],
  whatsapp: "https://wa.me/917200259009",
  instagram: "https://www.instagram.com/sripalaniyandaverxerox/",
  facebook: "https://www.facebook.com/people/Sri-palaniyandayer-xerox/61574187865739/",
  email: "vijayxerox02@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/yVEyBx2Q68CwS9ei7?g_st=ac",
  mapsEmbed:
    "https://www.google.com/maps?q=PKGR+Complex,+Rajendra+Road,+Palani,+Tamil+Nadu+624601&output=embed",
};

export const PRIMARY_TEL = `tel:${SITE.phones[0].tel}`;

// FormSubmit delivers enquiries to this inbox (the first submission sends an activation email to it).
export const ENQUIRY_ENDPOINT = "https://formsubmit.co/ajax/vijayxerox02@gmail.com";
