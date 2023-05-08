const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought-out design and do their best to put it in code. He goes above and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'Magdalena Rita',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This guy is an amazing frontend developer who delivered the task exactly how we needed it. Do yourself a favor and hire him. You will not be disappointed by the results. He will go the extra mile to make sure that you are happy with your project. I will definitely work with him again!',
  },
  {
    name: 'Ani Eligia',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "This guy is a hard worker. Communication was also very good with him and he was responsive, something not easily found in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Terry Mathias',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "I had my concerns that, due to a tight deadline, this project couldn't be completed. But this guy proved me wrong. Not only did he deliver outstanding work, but he managed to deliver it 2 days prior to the deadline. And when I asked for some revisions, he made them in MINUTES. I'm looking forward to working with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Nikita Thera',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces high-quality work. We have been lucky to have worked with him!',
  },
  {
    name: 'Ashwin Aivars',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'This guy is a young and talented IT professional, who is also proactive and responsible. He is very strong at PSD2HTML conversions and HTML/CSS technology. In addition, he is a quick learner who is eager to learn new technologies.',
  },
];

let idx = 1;

function updateTestimonial() {
  const {name, position, photo, text} = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
