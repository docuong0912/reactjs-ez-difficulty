import './App.css';
import Header from './component/Header';
import Question from './component/Question';

const q = [
    {
        id: 1,
        content: 'How many team members can i invite?',
        content2:'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
        id: 2,
        content: 'What is the maximum file upload size?',
        content2:'No more than 2GB. All files in your account must fit your allotted storage space. '
    },
    {
        id: 3,
        content: 'How do i reset my password?',
        content2:'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
        id: 4,
        content: 'Can i cancel my subscription?',
        content2:'Yes! Send us a message and we’ll process your request no questions asked. '
    },
    {
        id: 5,
        content: 'Do you provide additional support?',
        content2:'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    },
];
function App() {

  return (
      <div className="container">
          <Header />
          <div className="faq-container">
              <h1> faq </h1>
              <ul className="list-of-question">
                  {
                      q.map((question) => {
                          return <li> <Question key={question.id} questions={question } /> </li>
                      })
                      }
              </ul>
              
          </div>
      </div>
  );
}

export default App;