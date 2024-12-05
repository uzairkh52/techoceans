import { Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../api/api";


const ContactForm = (props) => {
    const getfunction = ()=> {
      api.get("/api/get",) .then((res) => {
        console.log("res:", res);
        
          
        })
        .catch((error) => {});
    };
  useEffect(()=> {
    getfunction();
  })

  const Countries = [
    {code:"af", name: "Afghanistan (‫افغانستان‬‎)"},
       
    {code:"ax", name: "Åland Islands (Åland)"},
       
    {code:"al", name: "Albania (Shqipëri)"},
       
    {code:"dz", name: "Algeria (‫الجزائر‬‎)"},
       
    {code:"as", name: "American Samoa"},
       
    {code:"ad", name: "Andorra"},
       
    {code:"ao", name: "Angola"},
       
    {code:"ai", name: "Anguilla"},
       
    {code:"ag", name: "Antigua and Barbuda"},
       
    {code:"ar", name: "Argentina"},
       
    {code:"am", name: "Armenia (Հայաստան)"},
       
    {code:"aw", name: "Aruba"},
       
    {code:"au", name: "Australia"},
       
    {code:"at", name: "Austria (Österreich)"},
       
    {code:"az", name: "Azerbaijan (Azərbaycan)"},
       
    {code:"bs", name: "Bahamas"},
       
    {code:"bh", name: "Bahrain (‫البحرين‬‎)"},
       
    {code:"bd", name: "Bangladesh (বাংলাদেশ)"},
       
    {code:"bb", name: "Barbados"},
       
    {code:"by", name: "Belarus (Беларусь)"},
       
    {code:"be", name: "Belgium (België)"},
       
    {code:"bz", name: "Belize"},
       
    {code:"bj", name: "Benin (Bénin)"},
       
    {code:"bm", name: "Bermuda"},
       
    {code:"bt", name: "Bhutan (འབྲུག)"},
       
    {code:"bo", name: "Bolivia"},
       
    {code:"ba", name: "Bosnia and Herzegovina (Босна и Херцеговина)"},
       
    {code:"bw", name: "Botswana"},
       
    {code:"br", name: "Brazil (Brasil)"},
       
    {code:"io", name: "British Indian Ocean Territory"},
       
    {code:"vg", name: "British Virgin Islands"},
       
    {code:"bn", name: "Brunei"},
       
    {code:"bg", name: "Bulgaria (България)"},
       
    {code:"bf", name: "Burkina Faso"},
       
    {code:"bi", name: "Burundi (Uburundi)"},
       
    {code:"kh", name: "Cambodia (កម្ពុជា)"},
       
    {code:"cm", name: "Cameroon (Cameroun)"},
       
    {code:"ca", name: "Canada"},
       
    {code:"cv", name: "Cape Verde (Kabu Verdi)"},
       
    {code:"bq", name: "Caribbean Netherlands"},
       
    {code:"ky", name: "Cayman Islands"},
       
    {code:"cf", name: "Central African Republic (République Centrafricaine)"},
       
    {code:"td", name: "Chad (Tchad)"},
       
    {code:"cl", name: "Chile"},
       
    {code:"cn", name: "China (中国)"},
       
    {code:"cx", name: "Christmas Island"},
       
    {code:"cc", name: "Cocos (Keeling) Islands (Kepulauan Cocos (Keeling))"},
       
    {code:"co", name: "Colombia"},
       
    {code:"km", name: "Comoros (‫جزر القمر‬‎)"},
       
    {code:"cd", name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)"},
       
    {code:"cg", name: "Congo (Republic) (Congo-Brazzaville)"},
       
    {code:"ck", name: "Cook Islands"},
       
    {code:"cr", name: "Costa Rica"},
       
    {code:"ci", name: "Côte d’Ivoire"},
       
    {code:"hr", name: "Croatia (Hrvatska)"},
       
    {code:"cu", name: "Cuba"},
       
    {code:"cw", name: "Curaçao"},
       
    {code:"cy", name: "Cyprus (Κύπρος)"},
       
    {code:"cz", name: "Czech Republic (Česká republika)"},
       
    {code:"dk", name: "Denmark (Danmark)"},
       
    {code:"dj", name: "Djibouti"},
       
    {code:"dm", name: "Dominica"},
       
    {code:"do", name: "Dominican Republic (República Dominicana)"},
       
    {code:"ec", name: "Ecuador"},
       
    {code:"eg", name: "Egypt (‫مصر‬‎)"},
       
    {code:"sv", name: "El Salvador"},
       
    {code:"gq", name: "Equatorial Guinea (Guinea Ecuatorial)"},
       
    {code:"er", name: "Eritrea"},
       
    {code:"ee", name: "Estonia (Eesti)"},
       
    {code:"et", name: "Ethiopia"},
       
    {code:"fk", name: "Falkland Islands (Islas Malvinas)"},
       
    {code:"fo", name: "Faroe Islands (Føroyar)"},
       
    {code:"fj", name: "Fiji"},
       
    {code:"fi", name: "Finland (Suomi)"},
       
    {code:"fr", name: "France"},
       
    {code:"gf", name: "French Guiana (Guyane française)"},
       
    {code:"pf", name: "French Polynesia (Polynésie française)"},
       
    {code:"ga", name: "Gabon"},
       
    {code:"gm", name: "Gambia"},
       
    {code:"ge", name: "Georgia (საქართველო)"},
       
    {code:"de", name: "Germany (Deutschland)"},
       
    {code:"gh", name: "Ghana (Gaana)"},
       
    {code:"gi", name: "Gibraltar"},
       
    {code:"gr", name: "Greece (Ελλάδα)"},
       
    {code:"gl", name: "Greenland (Kalaallit Nunaat)"},
       
    {code:"gd", name: "Grenada"},
       
    {code:"gp", name: "Guadeloupe"},
       
    {code:"gu", name: "Guam"},
       
    {code:"gt", name: "Guatemala"},
       
    {code:"gg", name: "Guernsey"},
       
    {code:"gn", name: "Guinea (Guinée)"},
       
    {code:"gw", name: "Guinea-Bissau (Guiné Bissau)"},
       
    {code:"gy", name: "Guyana"},
       
    {code:"ht", name: "Haiti"},
       
    {code:"hn", name: "Honduras"},
       
    {code:"hk", name: "Hong Kong (香港)"},
       
    {code:"hu", name: "Hungary (Magyarország)"},
       
    {code:"is", name: "Iceland (Ísland)"},
       
    {code:"in", name: "India (भारत)"},
       
    {code:"id", name: "Indonesia"},
       
    {code:"ir", name: "Iran (‫ایران‬‎)"},
       
    {code:"iq", name: "Iraq (‫العراق‬‎)"},
       
    {code:"ie", name: "Ireland"},
       
    {code:"im", name: "Isle of Man"},
       
    {code:"il", name: "Israel (‫ישראל‬‎)"},
       
    {code:"it", name: "Italy (Italia)"},
       
    {code:"jm", name: "Jamaica"},
       
    {code:"jp", name: "Japan (日本)"},
       
    {code:"je", name: "Jersey"},
       
    {code:"jo", name: "Jordan (‫الأردن‬‎)"},
       
    {code:"kz", name: "Kazakhstan (Казахстан)"},
       
    {code:"ke", name: "Kenya"},
       
    {code:"ki", name: "Kiribati"},
       
    {code:"xk", name: "Kosovo (Kosovë)"},
       
    {code:"kw", name: "Kuwait (‫الكويت‬‎)"},
       
    {code:"kg", name: "Kyrgyzstan (Кыргызстан)"},
       
    {code:"la", name: "Laos (ລາວ)"},
       
    {code:"lv", name: "Latvia (Latvija)"},
       
    {code:"lb", name: "Lebanon (‫لبنان‬‎)"},
       
    {code:"ls", name: "Lesotho"},
       
    {code:"lr", name: "Liberia"},
       
    {code:"ly", name: "Libya (‫ليبيا‬‎)"},
       
    {code:"li", name: "Liechtenstein"},
       
    {code:"lt", name: "Lithuania (Lietuva)"},
       
    {code:"lu", name: "Luxembourg"},
       
    {code:"mo", name: "Macau (澳門)"},
       
    {code:"mk", name: "Macedonia (FYROM) (Македонија)"},
       
    {code:"mg", name: "Madagascar (Madagasikara)"},
       
    {code:"mw", name: "Malawi"},
       
    {code:"my", name: "Malaysia"},
       
    {code:"mv", name: "Maldives"},
       
    {code:"ml", name: "Mali"},
       
    {code:"mt", name: "Malta"},
       
    {code:"mh", name: "Marshall Islands"},
       
    {code:"mq", name: "Martinique"},
       
    {code:"mr", name: "Mauritania (‫موريتانيا‬‎)"},
       
    {code:"mu", name: "Mauritius (Moris)"},
       
    {code:"yt", name: "Mayotte"},
       
    {code:"mx", name: "Mexico (México)"},
       
    {code:"fm", name: "Micronesia"},
       
    {code:"md", name: "Moldova (Republica Moldova)"},
       
    {code:"mc", name: "Monaco"},
       
    {code:"mn", name: "Mongolia (Монгол)"},
       
    {code:"me", name: "Montenegro (Crna Gora)"},
       
    {code:"ms", name: "Montserrat"},
       
    {code:"ma", name: "Morocco (‫المغرب‬‎)"},
       
    {code:"mz", name: "Mozambique (Moçambique)"},
       
    {code:"mm", name: "Myanmar (Burma) (မြန်မာ)"},
       
    {code:"na", name: "Namibia (Namibië)"},
       
    {code:"nr", name: "Nauru"},
       
    {code:"np", name: "Nepal (नेपाल)"},
       
    {code:"nl", name: "Netherlands (Nederland)"},
       
    {code:"nc", name: "New Caledonia (Nouvelle-Calédonie)"},
       
    {code:"nz", name: "New Zealand"},
       
    {code:"ni", name: "Nicaragua"},
       
    {code:"ne", name: "Niger (Nijar)"},
       
    {code:"ng", name: "Nigeria"},
       
    {code:"nu", name: "Niue"},
       
    {code:"nf", name: "Norfolk Island"},
       
    {code:"kp", name: "North Korea (조선 민주주의 인민 공화국)"},
       
    {code:"mp", name: "Northern Mariana Islands"},
       
    {code:"no", name: "Norway (Norge)"},
       
    {code:"om", name: "Oman (‫عُمان‬‎)"},
       
    {code:"pk", name: "Pakistan (‫پاکستان‬‎)"},
       
    {code:"pw", name: "Palau"},
       
    {code:"ps", name: "Palestine (‫فلسطين‬‎)"},
       
    {code:"pa", name: "Panama (Panamá)"},
       
    {code:"pg", name: "Papua New Guinea"},
       
    {code:"py", name: "Paraguay"},
       
    {code:"pe", name: "Peru (Perú)"},
       
    {code:"ph", name: "Philippines"},
       
    {code:"pn", name: "Pitcairn Islands"},
       
    {code:"pl", name: "Poland (Polska)"},
       
    {code:"pt", name: "Portugal"},
       
    {code:"pr", name: "Puerto Rico"},
       
    {code:"qa", name: "Qatar (‫قطر‬‎)"},
       
    {code:"re", name: "Réunion (La Réunion)"},
       
    {code:"ro", name: "Romania (România)"},
       
    {code:"ru", name: "Russia (Россия)"},
       
    {code:"rw", name: "Rwanda"},
       
    {code:"bl", name: "Saint Barthélemy (Saint-Barthélemy)"},
       
    {code:"sh", name: "Saint Helena"},
       
    {code:"kn", name: "Saint Kitts and Nevis"},
       
    {code:"lc", name: "Saint Lucia"},
       
    {code:"mf", name: "Saint Martin (Saint-Martin (partie française))"},
       
    {code:"pm", name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)"},
       
    {code:"vc", name: "Saint Vincent and the Grenadines"},
       
    {code:"ws", name: "Samoa"},
       
    {code:"sm", name: "San Marino"},
       
    {code:"st", name: "São Tomé and Príncipe (São Tomé e Príncipe)"},
       
    {code:"sa", name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)"},
       
    {code:"sn", name: "Senegal (Sénégal)"},
       
    {code:"rs", name: "Serbia (Србија)"},
       
    {code:"sc", name: "Seychelles"},
       
    {code:"sl", name: "Sierra Leone"},
       
    {code:"sg", name: "Singapore"},
       
    {code:"sx", name: "Sint Maarten"},
       
    {code:"sk", name: "Slovakia (Slovensko)"},
       
    {code:"si", name: "Slovenia (Slovenija)"},
       
    {code:"sb", name: "Solomon Islands"},
       
    {code:"so", name: "Somalia (Soomaaliya)"},
       
    {code:"za", name: "South Africa"},
       
    {code:"gs", name: "South Georgia &amp; South Sandwich Islands"},
       
    {code:"kr", name: "South Korea (대한민국)"},
       
    {code:"ss", name: "South Sudan (‫جنوب السودان‬‎)"},
       
    {code:"es", name: "Spain (España)"},
       
    {code:"lk", name: "Sri Lanka (ශ්‍රී ලංකාව)"},
       
    {code:"sd", name: "Sudan (‫السودان‬‎)"},
       
    {code:"sr", name: "Suriname"},
       
    {code:"sj", name: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)"},
       
    {code:"sz", name: "Swaziland"},
       
    {code:"se", name: "Sweden (Sverige)"},
       
    {code:"ch", name: "Switzerland (Schweiz)"},
       
    {code:"sy", name: "Syria (‫سوريا‬‎)"},
       
    {code:"tw", name: "Taiwan (台灣)"},
       
    {code:"tj", name: "Tajikistan"},
       
    {code:"tz", name: "Tanzania"},
       
    {code:"th", name: "Thailand (ไทย)"},
       
    {code:"tl", name: "Timor-Leste"},
       
    {code:"tg", name: "Togo"},
       
    {code:"tk", name: "Tokelau"},
       
    {code:"to", name: "Tonga"},
       
    {code:"tt", name: "Trinidad and Tobago"},
       
    {code:"tn", name: "Tunisia (‫تونس‬‎)"},
       
    {code:"tr", name: "Turkey (Türkiye)"},
       
    {code:"tm", name: "Turkmenistan"},
       
    {code:"tc", name: "Turks and Caicos Islands"},
       
    {code:"tv", name: "Tuvalu"},
       
    {code:"ug", name: "Uganda"},
       
    {code:"ua", name: "Ukraine (Україна)"},
       
    {code:"ae", name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)"},
       
    {code:"gb", name: "United Kingdom"},
       
    {code:"us", name: "United States"},
       
    {code:"um", name: "U.S. Minor Outlying Islands"},
       
    {code:"vi", name: "U.S. Virgin Islands"},
       
    {code:"uy", name: "Uruguay"},
       
    {code:"uz", name: "Uzbekistan (Oʻzbekiston)"},
       
    {code:"vu", name: "Vanuatu"},
       
    {code:"va", name: "Vatican City (Città del Vaticano)"},
       
    {code:"ve", name: "Venezuela"},
       
    {code:"vn", name: "Vietnam (Việt Nam)"},
       
    {code:"wf", name: "Wallis and Futuna"},
       
    {code:"eh", name: "Western Sahara (‫الصحراء الغربية‬‎)"},
       
    {code:"ye", name: "Yemen (‫اليمن‬‎)"},
       
    {code:"zm", name: "Zambia"},
       
    {code:"zw", name: "Zimbabwe"},
  ]
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();
  const [message, setMessage] = useState();
  
  const coundtryHandle =(e)=> {
    setCountry(e.target.value)
  }
  const FormSubmitHandle =(e)=> {
    const params = {
      name: name,
      phone: phone,
      email: email,
      country: country,
      message: message,
    }
    console.log("params:", params);
    
  }
   return (
    <section className={styles.ContactForm + " section-padding basecolor1-dark"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10 white">
          Hey! Let’s Talk
          </h2>
        </div>
        <Card >
              <CardContent>
                <Grid  className="" item md={12} xs={12}>
                  <div
                    className={
                      styles.box +
                      "  br-12 lightgray-bg"
                    }
                  >
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                    >
                      <Grid container spacing={3} mt={3}>
                        <Grid  className="" item md={6} xs={12}>
                          <TextField   
                            fullWidth
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue={name}
                            onChange={(e)=> setName(e.target.value)}
                          />
                          
                        </Grid>
                        <Grid  className="" item md={6} xs={12}>
                          <TextField
                          fullWidth
                            required
                            id="outlined-required"
                            label="Phone"
                            defaultValue={phone}
                            onChange={(e)=> setPhone(e.target.value)}

                          />
                        </Grid>
                        <Grid className="" item md={6} xs={12}>
                          <TextField
                          fullWidth
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue={email}
                            onChange={(e)=> setEmail(e.target.value)}
                          />
                        </Grid>
                        <Grid className="" item md={6} xs={12}>
                          <TextField
                          fullWidth
                            required
                            id="outlined-required"
                            label="Message"
                            defaultValue={message}
                            onChange={(e)=> setMessage(e.target.value)}
                          />
                        </Grid>
                        <Grid className="" item md={6} xs={12}>
                        <FormControl fullWidth>
        <InputLabel id="select-label">Age</InputLabel>
        <Select
          labelId="select-label"
          value={"age"}
          
        >
          <MenuItem value={10} selected disabled>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                          <Select
                          fullWidth
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={country}
                            label="Country"
                            onChange={coundtryHandle}
                          >
                            <MenuItem disabled value="">
                              <em>Country</em>
                            </MenuItem>
                          {Countries.map((getCountries)=> {
                            return(
                              <MenuItem value={getCountries.name}>{getCountries.name}</MenuItem>
                            )
                          })}
                            
                          </Select>
                        </Grid>
                        <Grid className="" item md={12} xs={12}>
                          <Box className="d-flex justify-content-center" sx={{mt: 4}}>
                            <Button
                                className={styles.enterbutton + " btn button ui btn-primary btn-md align-center mr-20"}
                                onClick={()=> FormSubmitHandle()}
                              >
                                Get in touch
                              </Button>
                          </Box>
                        </Grid>
                        {/*  */}
                      </Grid>

                        </Box>
                  </div>
                </Grid>
              </CardContent>
            </Card>
        
      </Container>
    </section>
   );
}

export default ContactForm;