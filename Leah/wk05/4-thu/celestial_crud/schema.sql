--drop it like it's hot
DROP TABLE galaxies;
DROP TABLE moons;
DROP TABLE planets;

-- galaxy table
CREATE TABLE galaxies (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    featured BOOLEAN,
    photo_url VARCHAR(400),
    blurb TEXT
);

-- planet table
CREATE TABLE planets (
    id SERIAL4 PRIMARY KEY,
    name TEXT NOT NULL,
    photo_url VARCHAR(400),
    galaxy_id INTEGER NOT NULL,
    featured BOOLEAN,
    blurb TEXT,
    FOREIGN KEY (galaxy_id) REFERENCES galaxies(id) ON DELETE RESTRICT
);

-- moons table

CREATE TABLE moons (
    id SERIAL4 PRIMARY KEY,
    name TEXT NOT NULL,
    photo_url VARCHAR(400),
    planet_id INTEGER NOT NULL,
    featured BOOLEAN,
    blurb TEXT,
    FOREIGN KEY (planet_id) REFERENCES planets(id) ON DELETE RESTRICT
);


INSERT INTO galaxies (name, photo_url,blurb) values
('Milky Way', 'https://cdn.wallpapersafari.com/16/18/p5LdBr.jpg','The Milky Way is the galaxy that contains our Solar System. The descriptive "milky" is derived from the appearance from Earth of the galaxy – a band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye. -Wikipedia'),
('Andromeda Galaxy', 'https://lh3.googleusercontent.com/qkNIVtQLbQuhOCmaJnwVJuRkAKAuaqxC6Zv-yi7ENPWovSGYnXog5fPyFpFfjo-gWd97VvIgiCqfG7Yby_JksPvkZY_lnoeSDxKNrIRjtEq2SdnGAVOqhrLJs1W16UwUmchhIxd0','The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224, is a spiral galaxy approximately 780 kiloparsecs (2.5 million light-years) from Earth, and the nearest major galaxy to the Milky Way. Its name stems from the area of the sky in which it appears, the constellation of Andromeda. -Wikipedia');
INSERT INTO planets (name, photo_url, galaxy_id, blurb) values
('Earth', 'https://metrouk2.files.wordpress.com/2018/03/sei_3010712.jpg?w=748&h=392&crop=1',1,'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth''s gravity interacts with other objects in space, especially the Sun and the Moon, Earth''s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times. -Wikipedia'),
('Saturn', 'https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg',1, 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god''s sickle. -Wikipedia');

INSERT INTO moons (name, photo_url, planet_id, blurb) values
('Earths'' Moon', 'http://jtgnew.sjrdesign.net/images/earth_moon_full.jpg',1,'The Moon is an astronomical body that orbits planet Earth and is Earth''s only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter''s satellite Io the second-densest satellite in the Solar System among those whose densities are known. -Wikipedia'),
('Pan', 'https://www.sciencespacerobots.com/2017pics/pan-saturn-moon-closeup.jpg',2,'Pan is the innermost moon of Saturn. It is a small, walnut-shaped moon approximately 35 kilometres across and 23 km wide that orbits within the Encke Gap in Saturn''s A Ring. Pan is a ring shepherd and is responsible for keeping the Encke Gap free of ring particles.
It was discovered by Mark R. Showalter in 1990 from analysis of old Voyager 2 probe photos and received the provisional designation S/1981 S 13 because the discovery images dated back to 1981. -Wikipedia'),
('Daphnis', 'http://wwwcdn.skyandtelescope.com/wp-content/uploads/7576_PIA21055-768w.jpg',2,
'The Moon is an astronomical body that orbits planet Earth and is Earth''s only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter''s satellite Io the second-densest satellite in the Solar System among those whose densities are known.
The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia. -Wikipedia'),
('Atlas', 'https://www.newsmax.com/Newsmax/files/a8/a8a0763f-7f3b-4264-bdfd-cdaabaa94828.jpg',2,
'Atlas is an inner satellite of Saturn.
Atlas was discovered by Richard Terrile in 1980 (some time before November 12) from Voyager photos and was designated S/1980 S 28. In 1983 it was officially named after Atlas of Greek mythology, because it "holds the rings on its shoulders" like the Titan Atlas held the sky up above the Earth. It is also designated Saturn XV.
Atlas is the closest satellite to the sharp outer edge of the A ring, and was long thought to be a shepherd satellite for this ring. However, now it is known that the outer edge of the ring is instead maintained by a 7:6 orbital resonance with the larger but more distant moons Janus and Epimetheus. In 2004 a faint, thin ring, temporarily designated R/2004 S 1, was discovered in the Atlantean orbit. -Wikipedia');