import Logo from "@/components/icons/LogoGradient";
import Layout from "@/components/layouts/MainLayout";
import PastEvents from "@/components/pages/top/PastEvents";

export default function TopPage() {
  return (
    <Layout>
      <div class="w-full pt-20 pb-8 px-6 border-b">
        <div class="max-w-3xl mx-auto flex flex-col gap-4">
          <Logo klass="max-w-80 h-auto mx-auto pl-4" stroke={12} />
          <h1 class="text-4xl mt-14 font-mono font-bold">ETHTokyo'26</h1>
          <p class="text-2xl">
            🗓️ September 19-27, 2026
            <br />📍 Tokyo, Japan
          </p>
        </div>
      </div>
      <div class="w-full pt-8 pb-9 px-6 border-b">
        <div class="max-w-3xl mx-auto">
          <h3 class="font-bold text-center text-2xl pb-5">What is ETHTokyo?</h3>
          <p>
            We are a community of Tokyo-based developers and professionals,
            driven by a shared sense of cypherpunk ethos and optimism for the
            future, dedicated to advance the development and adoption of
            Ethereum.
          </p>
          <p class="mt-4">
            ETHTokyo'26 will be held from September 19 to 27, 2026, featuring
            conferences, events, and hackathons during the period.
          </p>
          <div class="flex items-center justify-center pt-4">
            <a class="btn mx-auto" href="/manifesto">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div class="w-full pt-8 pb-9 px-6 border-b">
        <div class="max-w-3xl mx-auto">
          <h3 class="font-bold text-center text-2xl pb-5">Schedule</h3>
          <ul class="list-disc list-outside pl-6">
            <li class="text-lg">ETHTokyo Week&nbsp;:&nbsp;Sep 19-27, 2026</li>
            <ul class="list-disc list-outside pl-4 mb-6">
              <li>
                Ethereum Institutional Summit : <i>TBA</i>
              </li>
              <li>
                Decentralized AI Summit : <i>TBA</i>
              </li>
              <li>
                <a
                  class="ext"
                  href="https://ethglobal.com/events/pragma-tokyo2026"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Pragma Tokyo 2026
                </a>
                &nbsp;:&nbsp; Sep 24
              </li>
              <li>
                <a
                  class="ext"
                  href="https://ethglobal.com/events/tokyo2026"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  ETHGlobal Tokyo 2026
                </a>
                &nbsp;:&nbsp; Sep 25-27
              </li>
            </ul>
          </ul>
          <div class="max-w-3xl mx-auto">
            <h3 class="font-bold text-center text-2xl pb-5">Get Involved</h3>
            <div class="flex items-center justify-center">
              <a
                class="btn mx-auto"
                href="https://luma.com/eth-tokyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Event calendar
              </a>
              {/* <a
                class="btn mx-auto"
                href="https://example.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tickets & Registration
              </a> */}
              {/* <a
                class="btn mx-auto"
                href="https://speak.ethtokyo.org/conference-2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Speakers apply
              </a> */}
              <a
                class="btn mx-auto"
                href="https://forms.ethtokyo.org/p/volunteer-signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer with us
              </a>
              <a
                class="btn mx-auto"
                href="https://forms.ethtokyo.org/p/sponsor-inquiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-8 pb-9 px-6 border-b">
        <div class="max-w-3xl mx-auto">
          <h3 class="font-bold text-center text-2xl pb-5">Access</h3>
          <div class="flex flex-col gap-6">
            <div>
              <h4 class="font-bold text-lg mb-2">✈️ Traveling to Tokyo</h4>
              <div>
                Tokyo has two airports:&nbsp;
                <a
                  class="ext"
                  href="https://maps.app.goo.gl/pEzYqQj1HuTY3ctD7"
                  target="_blank"
                  rel="noreferer noopener"
                >
                  Narita International Airport (NRT)
                </a>
                &nbsp;and&nbsp;
                <a
                  class="ext"
                  href="https://maps.app.goo.gl/C1rgT7mBmtXzULy68"
                  target="_blank"
                  rel="noreferer noopener"
                >
                  Haneda International Airport (HND)
                </a>
                . They are both well connected with the railway system.
              </div>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-2">🚇 Urban Transportation</h4>
              <div class="flex flex-col gap-4">
                <p>
                  Tokyo is a city optimized for public transportation. Most of
                  the times, the quickest and easiest way to getting from A to B
                  is by trains and buses. If you are staying longer than just a
                  few days, you might want to consider purchasing a&nbsp;
                  <a
                    class="ext"
                    href="https://www.jreast.co.jp/multi/en/pass/suica.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    SUICA
                  </a>
                  &nbsp;or&nbsp;
                  <a
                    class="ext"
                    href="https://www.pasmo.co.jp/visitors/en/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    PASMO
                  </a>
                  &nbsp; card at for the best experience, which can be obtained
                  at pretty much any train station. You can use these cards to
                  ride the buses also.
                </p>
                <p>
                  <strong>🛴 Scooters & Bikes</strong> : Depending on the area,
                  you will also find scooters and bikes that you can grab around
                  the city, using apps like{" "}
                  <a
                    class="ext"
                    href="https://play.google.com/store/apps/details?id=sc.luup.luup"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LUUP
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    class="ext"
                    href="https://play.google.com/store/apps/details?id=com.limebike"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LIME
                  </a>
                  . You should take precaution to stay safe since the streets in
                  Tokyo are generally narrow and crowded.
                </p>
                <p>
                  <strong>🚖 Taxis</strong> : Taxis are available through apps
                  like&nbsp;
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dena.automotive.taxibell"
                    class="ext"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GO
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ubercab"
                    class="ext"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Uber
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-2">📍 Venues</h4>
              <div class="text-center rounded-full border py-1 px-4 w-auto inline-block mx-auto">
                TBA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-8 pb-9">
        <PastEvents />
      </div>
    </Layout>
  );
}
