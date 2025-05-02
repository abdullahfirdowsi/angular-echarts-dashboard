import { Injectable } from '@angular/core';
import { Intern } from './intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternDataService {
  interns: Intern[] = [
    { sNo: 1, internId: 'I346', name: 'Deepan Chakkaravarthi', location: 'Chennai', programmingLanguage: 'Python', officialCompanyEmailId: 'deepan.chakkaravarthi@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Python,SQL', secondarySkill: 'Cloud computing,RPA', areaOfInterest: 'Cloud Computing', allocatedBU: 'DATA' },
    { sNo: 2, internId: 'I347', name: 'Logesh Kanna', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'logesh.kanna@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java,SQL', secondarySkill: 'HTML,CSS,Python', areaOfInterest: 'Web development , Data Analytics', allocatedBU: 'DATA' },
    { sNo: 3, internId: 'I348', name: 'Aravind S', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'aravind.s@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java,SQL,RPA', secondarySkill: 'UI/UX', areaOfInterest: 'Automation, Data Analytics', allocatedBU: 'DEX' },
    { sNo: 4, internId: 'I349', name: 'Gayathri Priya', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'gayathri.priya@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Cybersecurity(pentesting),RPA,JAVA,SQL', secondarySkill: 'Cloud computing,UI/UX', areaOfInterest: 'Cybersecurity,Data Analytics', allocatedBU: 'DATA' },
    { sNo: 5, internId: 'I350', name: 'Mohamed Aadhil', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'mohamed.aadhil@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Backend Development(Node JS),Gen AI, Devops', secondarySkill: 'Data and Cloud Engineering', areaOfInterest: 'Data Engineering,Gen AI,Cloud and Security', allocatedBU: 'DEX' },
    { sNo: 6, internId: 'I351', name: 'Raveena Sri', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'raveena.sri@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java, SQL,Cloud computing,Data Structures', secondarySkill: 'Data Analytics, AI/ML,SDLC', areaOfInterest: 'Data Analytics, Web Development', allocatedBU: 'DATA' },
    { sNo: 7, internId: 'I352', name: 'Sri Sai', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'sri.sai@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java, SQL', secondarySkill: 'RPA , UI/UX', areaOfInterest: 'Data analytics,Data Science ,Automation', allocatedBU: 'DATA' },
    { sNo: 8, internId: 'I353', name: 'Keerthi S', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'keerthi.s@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java,SQL', secondarySkill: 'HTML,CSS', areaOfInterest: 'Full Stack development', allocatedBU: 'DATA' },
    { sNo: 9, internId: 'I354', name: 'Madhubala Rajendiran', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'madhubala.rajendiran@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'java ,SQL', secondarySkill: 'Python', areaOfInterest: 'Data Analytics, Data Science', allocatedBU: 'DEX' },
    { sNo: 10, internId: 'I356', name: 'Kalaivendhan S', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'kalaivendhan.s@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'java,Machine Learning', secondarySkill: 'Data Analytics,SQL', areaOfInterest: 'Data Science', allocatedBU: 'DATA' },
    { sNo: 11, internId: 'I357', name: 'Prabakar Kesavan', location: 'Chennai', programmingLanguage: 'Python', officialCompanyEmailId: 'prabakar.kesavan@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Python , SQL', secondarySkill: 'RPA', areaOfInterest: 'Data Analytics, Data Science', allocatedBU: 'DATA' },
    { sNo: 12, internId: 'I358', name: 'Karthikeyan Vasudevan', location: 'Chennai', programmingLanguage: 'Java', officialCompanyEmailId: 'karthikeyan.vasudevan@ilink-systems.com', collegeName: 'Rajalakshmi Engineering College', primarySkill: 'Java, Problem solving', secondarySkill: '3D Modelling (Maya) , python, Basic RPA', areaOfInterest: 'Backend Development', allocatedBU: 'DATA' },
    { sNo: 13, internId: 'I359', name: 'Ansari Zayd', location: 'Pune', programmingLanguage: 'Python', officialCompanyEmailId: 'ansari.zayd@ilink-systems.com', collegeName: 'VIIT Pune', primarySkill: 'Data Science, Machine Learning', secondarySkill: 'Gen-AI, Analytics', areaOfInterest: 'AI/ML, Data Science', allocatedBU: 'DATA' },
    { sNo: 14, internId: 'I360', name: 'Shravani Karbhajane', location: 'Pune', programmingLanguage: 'Java', officialCompanyEmailId: 'shravani.karbhajane@ilink-systems.com', collegeName: 'VIIT Pune', primarySkill: 'Data Science', secondarySkill: 'image processing , Web development', areaOfInterest: 'Data Science, Machine Learning', allocatedBU: 'IAT' },
    { sNo: 15, internId: 'I361', name: 'Swaroop Khadke', location: 'Pune', programmingLanguage: 'C++', officialCompanyEmailId: 'swaroop.khadke@ilink-systems.com', collegeName: 'VIIT Pune', primarySkill: 'Data Analysis , Web Development', secondarySkill: 'Cloud,DBMS', areaOfInterest: 'Cloud', allocatedBU: 'DATA' },
//     { sNo: 16, internId: 'I362', name: 'Lalit Chaudhari', location: 'Pune', programmingLanguage: 'Java', officialCompanyEmailId: 'lalit.chaudhari@ilink-systems.com', collegeName: 'VIIT Pune', primarySkill: 'Data Science, Machine Learning, Java', secondarySkill: 'Gen-AI, Web development', areaOfInterest: 'AI/ML/web Development', allocatedBU: 'DATA' },
//     { sNo: 17, internId: 'I363', name: 'Sanket Dhakane', location: 'Pune', programmingLanguage: 'Java', officialCompanyEmailId: 'sanket.dhakane@ilink-systems.com', collegeName: 'VIIT
        
//         // import { Injectable } from '@angular/core';
// // import { Intern } from './intern.model';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class InternDataService {
// //   interns: Intern[] = [
// //     { sNo: 0, internId: 'I001', name: 'John Doe', location: 'New York', programmingLanguage: 'JavaScript', officialCompanyEmailId: 'john.doe@example.com', collegeName: 'XYZ University', primarySkill: 'Frontend', secondarySkill: 'Backend', areaOfInterest: 'AI', allocatedBU: 'Tech' },
    
    // Add more sample data here
  ];

  constructor() { }

  getInterns() {
    return this.interns;
  }
}