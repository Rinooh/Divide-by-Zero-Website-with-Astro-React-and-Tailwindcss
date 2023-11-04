import React from 'react';
import { Popover } from '@headlessui/react';

const OurDivisions = () => {
  return (
    <div id="OurDivisions" className="lg:mt-20 mt-4">
        <div className="flex justify-start items-center ml-[8.3%]">
            <img width="40" height="40" src="/icons/Building.png" alt="Purple Building Icon" className="w-12 h-auto mr-4" />
            <h1 className="max-md:text-3xl text-4xl font-bold">Our Divisions.</h1>
        </div>
        <div className="max-md:block flex mt-5 w-10/12 mx-auto">
            <div className="max-md:w-full w-4/12 rounded-l-[100px]">
                <img width="250" height="242" className="mx-auto mt-5" src="/images/DBZAllianceLogo.png" alt="Divide by Zero Alliance Logo" />
                <h1 className="max-md:text-3xl text-3xl text-center font-bold drop-shadow-5xl">Alliance</h1>
                <Popover>
                    {({ open }) => (
                    <>
                        <Popover.Button title="Read more about the alliance" className="mx-auto block">
                        <button
                            name="Read more about the alliance"
                            type='button'
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 text-xl mx-auto my-5 font-light overflow-hidden text-center relative block no-underline rounded-md blackBorder"
                        >
                            <span className="text-xl border-2 border-[#4D4D4D] py-1.5 bg-black rounded m-1 block hover:text-pink">
                            Read More
                            </span>
                        </button>
                        </Popover.Button>

                        {open && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-black p-4 rounded-md shadow-lg border-2 border-pink">
                            <h3 className="text-lg font-semibold mb-2">The Divide by Zero Alliance</h3>
                            <p className="text-gray-700">We're a big family of 30+ clans ranging from Gold II till Champ III. <br />
                                With about 7500 members in our server we can safely say that we're the largest and most active Discord based alliance, quite a title isn't it?<br />
                                It all started at the 4th of June in 2021 when AA decided to create the Divide by Zero Alliance, AA put down a solid structure to build the alliance on,<br />
                                Eventually more clans started joining the alliance and sadly AA stepped down from his owner position. The server ended up in the hands of Debojit, <br />
                                After a long ownership period Debojit also stepped down due to lack of activity. The ownership changed once more to Rien which is currently leading the alliance<br />
                                With Skog as CEO playing a vital role in the management of the organization.<br /> <br />

                                Its safe to say that the alliance wouldn't be this big if we didn't had our bot developer James, James is very skilled with coding in general and his bot proves it all. <br />
                                We hope to see a bright future ahead of us since we're not stopping anytime soon.
                            </p>
                            </div>
                        </div>
                        )}
                    </>
                    )}
                </Popover>
            </div>
            <div className="max-md:w-full w-4/12">
                <img width="250" height="242" className="mx-auto mt-5" src="/images/DBZGamingLogo.png" alt="Divide by Zero Gaming Logo" />
                <h1 className="max-md:text-3xl text-3xl text-center font-bold drop-shadow-5xl">Gaming</h1>
                <Popover>
                    {({ open }) => (
                    <>
                        <Popover.Button title="Read more about the gaming server" className="mx-auto block">
                        <button
                            name="Read more about the gaming server"
                            type='button'
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 text-xl mx-auto my-5 font-light overflow-hidden text-center relative block no-underline rounded-md blackBorder"
                        >
                            <span className="text-xl border-2 border-[#4D4D4D] py-1.5 bg-black rounded m-1 block hover:text-pink">
                            Read More
                            </span>
                        </button>
                        </Popover.Button>

                        {open && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-black p-4 rounded-md shadow-lg border-2 border-pink">
                            <h3 className="text-lg font-semibold mb-2">The Divide by Zero Gaming Server</h3>
                            <p className="text-gray-700">We offer a large variety of games in our gaming server<br />
                                The server saw its first daylight at the 9th of December 2021 with Ashmit (Admin in the DBZ Alliance) as owner,<br />
                                Launching multiple games from the start including Clash Royale and other Supercell games. <br />
                                Currently its main games are BGMI, Minecraft and Chess with frequent events going on. <br />
                                We're in love with our gaming side of things and expanding to more games outside of Clash of Clans was a great opportunity.
                            </p>
                            </div>
                        </div>
                        )}
                    </>
                    )}
                </Popover>
            </div>
            <div className="max-md:w-full w-4/12 rounded-r-[100px]">
                <img width="250" height="242" className="mx-auto mt-5" src="/images/DBZEsportsLogo.png" alt="Divide by Zero Esports Logo" />
                <h1 className="max-md:text-3xl text-3xl text-center font-bold drop-shadow-5xl">Esports</h1>
                <Popover>
                    {({ open }) => (
                    <>
                        <Popover.Button title="Read more about the esports server" className="mx-auto block">
                        <button
                            type='button'
                            name="Read more about the esports server"
                            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 text-xl mx-auto my-5 font-light overflow-hidden text-center relative block no-underline rounded-md blackBorder"
                        >
                            <span className="text-xl border-2 border-[#4D4D4D] py-1.5 bg-black rounded m-1 block hover:text-pink">
                            Read More
                            </span>
                        </button>
                        </Popover.Button>

                        {open && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-black p-4 rounded-md shadow-lg border-2 border-pink">
                            <h3 className="text-lg font-semibold mb-2">The Divide by Zero Esports Server</h3>
                            <p className="text-gray-700">The youngest server of them all, one could argue that we're still in the building process of it<br />
                            With our partner esports server closing down in 2023 we had to move forward when multiple staff members showed interest in opening a new Esports server.<br />
                            The current owner DeafToDeath is working hard establishing multiple teams, we're used to this since we keep a good amount of events in our Alliance server<br />
                            Currently we've got a full th15 team running and we're expanding on other townhall teams as well! There's been quite a lot of process since the launch of the server<br />
                            The server launched on the 4th of August in 2023 so that's as fresh as it can get. We're hoping to enter and expand into multiple other tournaments.
                            </p>
                            </div>
                        </div>
                        )}
                    </>
                    )}
                </Popover>
            </div>
        </div>
    </div>
  )
}

export default OurDivisions