import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import coach1 from './coach1.png'
import coach2 from './coach2.png'
import coach3 from './coach3.png'
import coach4 from './coach4.png'
import coach5 from './coach5.png'
import coach6 from './coach6.png'
import coach7 from './coach7.png'
import coach8 from './coach8.png'
import coach9 from './coach9.png'
import coach10 from './coach10.png'
import coach11 from './coach11.png'
import coach12 from './coach12.png'


import weight_loss_coach from './weight_loss_coach.svg'
import muscle_gain_coach from './muscle_gain_coach.svg'
import yoga_instructor from './yoga_instructor.svg'
import meal_planner_expert from './meal_planner_expert.svg'
import general_fitness_coach from './general_fitness_coach.svg'
import injury_recovery_specialist from './injury_recovery_specialist.svg'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}


export const specialityData = [
    {
        speciality: 'Weight Loss Coach',
        image: weight_loss_coach
    },
    {
        speciality: 'Muscle Gain Coach',
        image: muscle_gain_coach
    },
    {
        speciality: 'Yoga Instructor',
        image: yoga_instructor
    },
    {
        speciality: 'Meal Planning Expert',
        image: meal_planner_expert
    },
    {
        speciality: 'General Fitness Coach',
        image: general_fitness_coach
    },
    {
        speciality: 'Injury Recovery Specialist',
        image: injury_recovery_specialist
    },
]

export const coaches = [
    {
        _id: 'coach1',
        name: 'David Green',
        image: coach1,
        speciality: 'Weight Loss Coach',
        experience: '5 Years',
        about: 'David specializes in weight loss coaching, helping clients shed pounds through personalized workout and diet plans. He believes in a sustainable approach, combining exercise and nutrition for long-term results. With years of experience, he has guided many clients toward healthier lifestyles.',
        fees: 50,
        degree: 'Certified Nutrition & Weight Management Specialist',
        address: {
            line1: 'Fitness Hub, Downtown',
            line2: 'Los Angeles, CA'
        }
    },
    {
        _id: 'coach2',
        name: 'Mike Thompson',
        image: coach2,
        speciality: 'Muscle Gain Coach',
        experience: '4 Years',
        about: 'Mike is an expert in muscle building, creating tailored programs to help clients increase strength and mass. He focuses on progressive overload techniques and personalized nutrition strategies. His coaching style emphasizes consistency, discipline, and proper recovery to maximize results. Many clients have achieved significant transformations under his guidance.',
        fees: 60,
        degree: 'Certified Strength and Conditioning Specialist (CSCS)',
        address: {
            line1: 'Strength Studio, Uptown',
            line2: 'New York, NY'
        }
    },
    {
        _id: 'coach3',
        name: 'Anna Lee',
        image: coach3,
        speciality: 'Yoga Instructor',
        experience: '6 Years',
        about: 'Anna is a certified yoga instructor, offering various styles including Vinyasa, Hatha, and Restorative yoga. Her sessions focus on flexibility, mindfulness, and breath control to promote holistic well-being. She tailors practices for all levels, ensuring accessibility and effectiveness. Her expertise in meditation and relaxation techniques helps clients manage stress and improve mental clarity.',
        fees: 40,
        degree: 'Registered Yoga Teacher (RYT-500)',
        address: {
            line1: 'Yoga Center, Beach Road',
            line2: 'Miami, FL'
        }
    },
    {
        _id: 'coach4',
        name: 'Sarah Peterson',
        image: coach4,
        speciality: 'General Fitness Coach',
        experience: '3 Years',
        about: 'Sarah offers personalized fitness plans to improve overall health, focusing on strength, endurance, and flexibility. She incorporates functional training to enhance mobility and everyday performance. Her holistic approach combines fitness with nutrition advice, ensuring a complete wellness experience. She is passionate about making fitness enjoyable and sustainable for clients of all ages.',
        fees: 45,
        degree: 'Certified Personal Trainer (NASM-CPT)',
        address: {
            line1: 'Fit Studio, Midtown',
            line2: 'Chicago, IL'
        }
    },
    {
        _id: 'coach5',
        name: 'Lily Adams',
        image: coach5,
        speciality: 'Meal Planning Expert',
        experience: '4 Years',
        about: 'Lily specializes in customized meal planning, focusing on balanced nutrition for weight loss, muscle gain, and overall health. Her plans are scientifically backed and tailored to different lifestyles, including vegan, keto, and paleo diets. She educates clients on portion control and meal prep techniques. Her goal is to make healthy eating accessible and enjoyable for everyone.',
        fees: 55,
        degree: 'Certified Nutritionist & Dietitian (CND)',
        address: {
            line1: 'Nutrition Hub, City Center',
            line2: 'San Francisco, CA'
        }
    },
    {
        _id: 'coach6',
        name: 'John Wilson',
        image: coach6,
        speciality: 'Injury Recovery Specialist',
        experience: '7 Years',
        about: 'John helps clients recover from injuries with rehabilitation programs tailored to restore mobility and strength. He works closely with physical therapists to ensure safe recovery. His programs emphasize gradual progression, corrective exercises, and proper movement mechanics. His expertise has helped many athletes and individuals regain confidence in their physical abilities.',
        fees: 65,
        degree: 'Certified Rehabilitation Specialist (CRS)',
        address: {
            line1: 'Rehab Center, West Side',
            line2: 'Austin, TX'
        }
    },
    {
        _id: 'coach7',
        name: 'Emily Roberts',
        image: coach7,
        speciality: 'Weight Loss Coach',
        experience: '6 Years',
        about: 'Emily provides customized weight loss programs focused on sustainable lifestyle changes and healthy habits. She promotes a balanced approach that includes proper nutrition, strength training, and mindset coaching. She believes in long-term weight management rather than quick fixes. Her clients appreciate her motivational style and dedication to their success.',
        fees: 52,
        degree: 'Certified Weight Loss Specialist (CWS)',
        address: {
            line1: 'Health Zone, Suburb',
            line2: 'Denver, CO'
        }
    },
    {
        _id: 'coach8',
        name: 'Brian Mitchell',
        image: coach8,
        speciality: 'Muscle Gain Coach',
        experience: '5 Years',
        about: 'Brian helps clients develop lean muscle through personalized strength training and dietary guidance. His programs focus on progressive resistance training, proper nutrition, and adequate recovery. He emphasizes technique and injury prevention to ensure sustainable muscle growth. His coaching has helped athletes and beginners alike reach their physique goals.',
        fees: 62,
        degree: 'Certified Strength Coach (CSC)',
        address: {
            line1: 'Power Gym, Downtown',
            line2: 'Houston, TX'
        }
    },
    {
        _id: 'coach9',
        name: 'Jason White',
        image: coach9,
        speciality: 'Yoga Instructor',
        experience: '7 Years',
        about: 'Jason teaches various yoga styles, helping clients enhance flexibility, mindfulness, and relaxation. His classes focus on proper breathing techniques, body alignment, and stress relief. He customizes sessions based on clients’ needs, from beginners to advanced practitioners. His approach promotes both physical and mental well-being, fostering long-term health benefits.',
        fees: 42,
        degree: 'Certified Yoga Therapist (CYT)',
        address: {
            line1: 'Zen Studio, River Side',
            line2: 'Seattle, WA'
        }
    },
    {
        _id: 'coach10',
        name: 'Robert King',
        image: coach10,
        speciality: 'General Fitness Coach',
        experience: '4 Years',
        about: 'Robert designs well-rounded fitness plans to improve overall well-being through exercise and conditioning. His training includes functional movements, endurance workouts, and strength building. He ensures that every client receives a program suited to their goals and fitness level. His philosophy is to create enjoyable and effective workouts that lead to lasting results.',
        fees: 48,
        degree: 'Certified Fitness Coach (CFC)',
        address: {
            line1: 'Active Life Center, Midtown',
            line2: 'Philadelphia, PA'
        }
    },
    {
        _id: 'coach11',
        name: 'Sophia Martinez',
        image: coach11,
        speciality: 'Meal Planning Expert',
        experience: '5 Years',
        about: 'Sophia crafts personalized meal plans that align with health goals, from weight management to muscle gain. Her expertise covers a variety of dietary needs, including medical nutrition therapy. She educates clients on smart grocery shopping, portion control, and meal prepping. She believes that a well-structured diet is the key to achieving and maintaining good health.',
        fees: 58,
        degree: 'Registered Dietitian (RD)',
        address: {
            line1: 'Wellness Kitchen, South Side',
            line2: 'Phoenix, AZ'
        }
    },
    {
        _id: 'coach12',
        name: 'Jessica Cooper',
        image: coach12,
        speciality: 'Injury Recovery Specialist',
        experience: '6 Years',
        about: 'Jessica specializes in rehabilitation and injury recovery, helping clients regain strength and mobility safely. Her methods include functional training, post-injury strength rebuilding, and mobility drills. She works with individuals recovering from surgeries or chronic injuries. Her personalized approach has helped numerous clients restore their confidence and movement abilities.',
        fees: 67,
        degree: 'Certified Physical Rehabilitation Therapist (CPRT)',
        address: {
            line1: 'Recovery Haven, Central Plaza',
            line2: 'Boston, MA'
        }
    }
];

