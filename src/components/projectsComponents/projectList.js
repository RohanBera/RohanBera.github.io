import nirmaan from '../../assets/images/projects/nirmaan.jpeg'
import pydiva from '../../assets/images/projects/pydiva.png'
import vams from '../../assets/images/projects/vams.jpeg'
import bmazon from '../../assets/images/projects/bmazon.png'
import cheese from '../../assets/images/projects/cheese.png'
import anime from '../../assets/images/projects/anime.png'
import sort from '../../assets/images/projects/sort.png'

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../../assets/images/stack', false, /\.(svg)$/));

export const projectList = [
    {
        title: "Attendance Monitoring System",
        body: "Contact-less attendance using face authentication and geo-fencing",
        img: vams,
        linkTo: "",
        stack: [images['flutter.svg'], images['dart.svg'], images['firebase.svg'], images['mysql.svg']]
    },
    {
        title: "Interpolation using pydiva",
        body: "Automation of interpolating large scale datasets using PyDIVA",
        img: pydiva,
        linkTo: "https://github.com/RohanBera/Interpolation-using-PYDIVA",
        stack: [images['python.svg']]
    },
    {
        title: "Sorting Visualizer",
        body: "A responsive webapp to visualize how sorting algorithms work",
        img: sort,
        linkTo: "https://brogrammers-sorting-vis.netlify.app/",
        stack: [images['react.svg']]
    },
    {
        title: "Nirmaan",
        body: "Website for tech fest, Civil department, Osmania university",
        img: nirmaan,
        linkTo: "https://rohanbera.github.io/Nirmaan/index.html",
        stack: [images['linux.svg'], images['apache.svg'], images['mysql.svg'], images['php.svg']]
    },
    {
        title: "Anime recommender",
        body: "Recommends what anime you should watch next based on your anime watch history.",
        img: anime,
        linkTo: "https://github.com/RohanBera/Recommendation-system",
        stack: [images['python.svg']]
    },
    {
        title: "Bmazon",
        body: "An e-commerce website. With a unique name.",
        img: bmazon,
        linkTo: "https://github.com/RohanBera/Shopping",
        stack: [images['mongodb.svg'], images['express.svg'], images['react.svg'], images['nodejs.svg']]
    },
    {
        title: "Path-finder",
        body: "Finds the shortest path in a maze with randomly generated obstacles",
        img: cheese,
        linkTo: "https://github.com/RohanBera/Path-finder",
        stack: [images['c.svg']]
    }
]
