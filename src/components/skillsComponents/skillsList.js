function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../../assets/images/stack', false, /\.(svg)$/));

export const skillsList = [
    {
        title: "Languages",
        stack: [images['c.svg'], images['java.svg'], images['python.svg']]
    },
    {
        title: "Web dev using LAMP Stack",
        stack: [images['linux.svg'], images['apache.svg'], images['mysql.svg'], images['php.svg']]
    },
    {
        title: "Web dev using MERN Stack",
        stack: [images['mongodb.svg'], images['express.svg'], images['react.svg'], images['nodejs.svg']]
    },
    {
        title: "App dev using Flutter",
        stack: [images['flutter.svg'], images['dart.svg'], images['firebase.svg']]
    },
    {
        title: "Other skills",
        stack: [images['latex.svg'], images['github.svg']]
    }
]
