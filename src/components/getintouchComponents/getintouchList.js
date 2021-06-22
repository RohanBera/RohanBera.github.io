import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function importAll(r) {
    let notes = {};
    r.keys().forEach((item, index) => {
        notes[item.replace('./', '')] = r(item);
    });
    return notes;
}

const notes = importAll(require.context('../../assets/sounds', false, /\.(wav)$/));


export const getInTouchList = [
    {
        text: "Mail",
        class: "mail",
        icon: MailIcon,
        linkTo: 'mailto:17mcme21@uohyd.ac.in',
        note: notes['note1.wav']
    },
    {
        text: "Github",
        class: "github",
        icon: GitHubIcon,
        linkTo: 'https://github.com/RohanBera',
        note: notes['note2.wav']
    },
    {
        text: "LinkedIn",
        class: "linkedin",
        icon: LinkedInIcon,
        linkTo: 'https://www.linkedin.com/in/rohanbera/',
        note: notes['note3.wav']
    },
    {
        text: "Instagram",
        class: "instagram",
        icon: InstagramIcon,
        linkTo: 'https://www.instagram.com/rohan__ruku/',
        note: notes['note4.wav']
    }
]
