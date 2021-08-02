import { forwardRef, useState } from 'react';
import './contact.css'
function ContactMeFunc({ darkMode }, ref) {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [topic, setTopic] = useState('');
    let [content, setContent] = useState('');
    const submitForm = () => {
        console.log(name, email, topic, content);
    }
    return (
        <div className={"contact"+ (darkMode?' dark-about ':' light-about ')} ref={ref}>
            <div className={"contact-container"}>
                <div className={"contact-header my-4"}>
                    <span className={"text-2xl" + (darkMode?' text-white ':' text-black ')}>
                        How can I Help?
                    </span>
                </div>
                <div className={"contact-body"}>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Name
                                </label>
                                <input value={name} onChange={(e)=>{setName(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe" required />
                                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email
                                </label>
                                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="itsmejdoe@gmail.in" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Topic
                                </label>
                                <input value={topic} onChange={(e)=>{setTopic(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="I'd like to chat about..." />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Topic
                                </label>
                                <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} className="appearance-none block border border-gray-200 bg-gray-200 rounded mt-1 w-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="3" placeholder="Enter your message."></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-1/6 px-3">
                                <button onClick={submitForm} className={"submit" + (darkMode?" btn-dark text-white ":" btn-light text-black ")}>
                                Send
                                </button>                            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


const ContactMe = forwardRef(ContactMeFunc);
export default ContactMe;