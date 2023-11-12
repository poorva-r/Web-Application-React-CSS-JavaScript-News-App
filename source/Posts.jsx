import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
const blogPosts = [
	{
	title: "Mid-Term Practical for 3rd Year",
	body: `The 2nd midtern practical schedule for 5th sem students has been released. The test process aids the school in determining which faculties and classrooms require additional attention or funding. Exams are a wonderful way to track the development and efficacy of a class. Schools need to make sure that they are providing the finest education possible to their pupils. Based on the grades of the students, school officials can determine where improvements are required within the school, institution, or university. According to studies, a "happier class obtains higher marks," therefore a pattern of comparable average outcomes might suggest whether or not a class is motivated.`,
	author: "",
	imgUrl:
		"SemesterExamSchedule.jpg",
	},
	{
	title: "Meraki Auditions",
	body: `Dear Students,

	MERAKI 2022 Auditions: Bringing to you the nonstop entertainment with zest to explore the unknown culture of our nation.
	Fill up the form to register and take part with us in the ultimate journey of Meraki 2022.
	Date of Auditions: 16th and 17th November 2022.
	Register here: Form Link
	Dress code for auditions:
	Girls: Black top (body fit), Denim Jeans (body fit), Heels (min: 4” | max: 6”).
	Boys: Black shirt/ Black Polos, Jeans/ Trousers, Formal Shoes.
	Time and Venue will be shared after registration closes`,
	author: "",
	imgUrl:
		"img",
	},
	
];

const blogPosts2 = [
	{
	title: "Upcoming Placement Drive",
	body: `Creating a new employment is critical, and it is especially significant in the IT industry. The companies will locate appropriate, skilled, and talented people with the help of Off Campus Placements before they complete their studies. The Off Campus Pool Drives 2023 shortens the time it takes for a company to find qualified candidates that match their requirements. According to the survey, many candidates are interested in and enthusiastic about the latest IT jobs. India, after all, has the world’s largest population. It is apparent that a large number of people are looking for Off Campus Jobs in 2022 for 2023 Batch as well as Pool Campus Jobs.`,
	author: "",
	imgUrl:
		"maxresdefault.jpg",
	},
	{
	title: "II Midterm Exam(3rd Year)",
	body: `Exams can also be used to measure strengths and shortcomings. Teachers will be able to recognize when more class attention is required while teaching a specific subject. When grading the works, a pattern of flaws may emerge. Mock exams are a wonderful method to utilize while teaching before formal examinations in this situation. This will allow students and teachers to identify their deficiencies in time to prepare for the formal exam. This will offer them every one the opportunity to guarantee that they can perform to their full potential in class, which will benefit them in the future.`,
	author: "",
	imgUrl:
		"mock-exams.png",
	},
	
];



const blogPosts4 = [
	{
	title: "Blood Donation Camp",
	body: `"Blood Donation is the greatest donation and the noble step in the ve service of humanity"

	It is to inform all the concerned that a Blood Donation Camp is being organised
	
	for all the faculty, staff & students. Consent is received from Assistant Drug Controller to organise a Blood Donation Camp. In this regard, all are required to register their names latest by November 09, 2022. This is a social responsibility campaign organised for societal benefit.
	
	`,
	author: "",
	imgUrl:
		"blood_donation.png",
	},
	{
	title: "Google Cloud Certification",
	body: `Google Cloud’s role-based certifications measure an individual’s proficiency at performing a specific job role using Google Cloud technology. The knowledge, skills, and abilities required for each job role are assessed using rigorously developed industry-standard methods. Google Cloud certifications empower individuals to advance their careers, and give employers the confidence to build highly skilled, effective teams.

	Every Google Cloud certification starts with a formal study known as a Job Task Analysis (JTA).`,
	author: "",
	imgUrl:
		"https://inthecloud.withgoogle.com/certification-preparation/static/img/Cloud-certificationbadge-cloudengineer.png",
	},

	
	
];

const blogPosts5 = [
	{
	title: "NPTEL Certification",
	body: `The National Programme on Technology Enhanced Learning (NPTEL) was initiated by seven Indian Institutes of Technology (Bombay, Delhi, Kanpur, Kharagpur, Madras, Guwahati and Roorkee) along with the Indian Institute of Science, Bangalore in 2003. Five core disciplines were identified, namely, civil engineering, computer science and engineering, electrical engineering, electronics and communication engineering and mechanical engineering and 235 courses in web/video format were developed in this phase.`,
	author: "",
	imgUrl:
		"cert.jpg",
	},
	{
	title: "Winter Vacation",
	body: `Dear Students,

	This is to inform you all that the College will remain close for the Winter Vacation from Thursday, 25th December 2021 to Monday, 2nd January 2022.
	The College will reopen on Monday, 3rd January 2022 onwards.
	
	Regards,
	`,
	author: "",
	imgUrl:
		"https://w7.pngwing.com/pngs/493/200/png-transparent-holiday-winter-vacation-new-year-happy-winter-wordart-winter-text-logo.png",
	},

	
	
];



return (
	<><><><div className="posts-container">
		{blogPosts4.map((post, index) => (
			<Post key={index} index={index} post={post} />
		))}

	</div>
		
		</><br /><br /><hr /><br /><br /><div className="posts-container">
			{blogPosts.map((post, index) => (
				<Post key={index} index={index} post={post} />
			))}

		</div>

		<><br /><br /><hr /><br /><br /><div className="posts-container">
			{blogPosts2.map((post, index) => (
				<Post key={index} index={index} post={post} />
			))}

		</div></></><><br /><br /><hr /><br /><br /><div className="posts-container">
			{blogPosts5.map((post, index) => (
				<Post key={index} index={index} post={post} />
			))}

		</div></></>
);
};

export default Posts;
