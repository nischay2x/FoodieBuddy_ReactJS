import digitalAdvertisment from './images/digitalAdvertisment.jpg';
import eventManagement from './images/eventManagement.jpg';
import graphicDesign from './images/graphicDesign.jpg';
import videoEditing from './images/videoEditing.jpg';
import videoShoot from './images/videoShoot.jpg';
import weddingCorousel from './images/weddingCorousel.jpg';

export const contactInfo = { 
    'call' : '+91 8319809996', 
    'mail' : 'contact.newerafoundation@gmail.com',
    'address' : 'Building No 610 , Street No 8 , Gurunanak Nagar , Vaishali Nagar , Bhilai , C.G',
    'location' : 'https://maps.google.com/maps?q=vaishali%20nagar%20bhilai',
    'instagram' : 'https://www.instagram.com/the_newera_foundation/',
    'facebook' : 'https://www.facebook.com/shubhamtiwari1820aary/',
    'youtube' : 'https://www.youtube.com/channel/UCAEjfFj9SG_CwlenoHrGEtw',
    'linkedin' : '#',
    'whatsapp' : 'https://wa.me/917389162810'
}

export const homeData = {
    'welcomeText' : 'Welcome to the New Era of Everything.',
    'works' : [
        {'displayText' : 'Edu', 'link' : '#'},
        {'displayText' : 'Scikit', 'link' : '#'},
        {'displayText' : 'Work', 'link' : '#'},
        {'displayText' : 'Welfare', 'link' : '#'}
    ],
    'clientWords' : [
        {'name' : 'Naman Mathur', 'company' : 'Soul Esports', 'quote' : 'Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly.'},
        {'name' : 'Animesh Singh', 'company' : 'CRED India Limited', 'quote' : 'Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an.'},
        {'name' : 'Elliot Alderson', 'company' : 'F Society', 'quote' : 'Placing assured be if removed it besides on. Far shed each high read are men over day.'}
    ]
}

export const businessData = {
    services : [
        {titleText : 'Digital Advertisment', texts : [`This is a Brand New Way to showcase your brand through social media,
        we will gonna make fine add’s upon your brand with new scripts & we
        promote through our online networks most of the time audience use their
        smartphones so the best way to connect with them place your brand in front
        of their screens & we will help you with that .`], bgImg : digitalAdvertisment, videoLink : ''},

        {titleText : 'Wedding Corousel', texts : [`Make your Wedding Memorable with us its a one time in a life time spend well to make memories,
        this package contains Camera & Editing Work .`, `We also provide Decoration , Event Organisation & Locations.`], bgImg : weddingCorousel, videoLink : ''},

        {titleText : 'Editing & Designing', texts : [`Video Editing , Photo Editing , Unique Frame Designing & Wall Designing
        the things we can do for you at minimum cost . VFX + ANIMATION are the
        part of our working module.`], bgImg : videoEditing, videoLink : ''},

        {titleText : 'Event Management', texts : [`All kinds of Event can be managed by us , We are having Dance Choreographer
        for Sangeet Purpose , Bands for Musical Conserts , Entertainers to entertain the audience .`, `Birthday & Anniversary arrangements on affodable cost with decorations & venue suggestion`],
        bgImg : eventManagement, videoLink : ''},

        {titleText : 'Shoots & Art Work', texts : [`PHOTO / VIDEO SHOOTS – WEDDING , BIRTHDAY , ANNIVERSARY & MODEL etc.`, `Artistic Sketch , Human Paintings , Animated Paintings , Vector Art etc
        are also available at affodable cost.`], bgImg : videoShoot, videoLink : ''},

        {titleText : 'Design & Development', texts : [`2D – 3D Abstract Designs are there for you. Graphics & Logo Designs that can make you fall in
        love with us.`, `App & Website Designs are for you that can pose some special impact upon your competitors.
        Website Development is also Available.`], bgImg : graphicDesign, videoLink : ''}
    ]
}