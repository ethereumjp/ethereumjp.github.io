import Logo from "@/components/icons/LogoGradient";
import Layout from "@/components/layouts/MainLayout";
import { involvementLinks, scheduleItems } from "@/components/pages/top/data";
import PastEvents from "@/components/pages/top/PastEvents";
import Section from "@/components/pages/top/Section";
import ActionLink from "@/components/ui/ActionLink";
import ExternalLink from "@/components/ui/ExternalLink";

const TopPage = () => {
  return (
    <Layout>
      <section class="w-full pt-20 pb-8 px-6 border-b">
        <div class="max-w-3xl mx-auto flex flex-col gap-4">
          <Logo klass="max-w-80 h-auto mx-auto pl-4" stroke={12} />
          <h1 class="text-4xl mt-14 font-mono font-bold">ETHTokyo week 2026</h1>
          <p class="text-2xl">
            🗓️ September 19-27, 2026
            <br />📍 Tokyo, Japan
          </p>
        </div>
      </section>

      <Section title="What is ETHTokyo?">
        <p>
          We are a community of Tokyo-based developers and professionals, driven
          by a shared sense of cypherpunk ethos and optimism for the future,
          dedicated to advance the development and adoption of Ethereum.
        </p>
        <p class="mt-4">
          This year's ETHTokyo week will be held from September 19 to 27, 2026,
          featuring conferences, events, and hackathons during the period.
        </p>
        <div class="flex items-center justify-center pt-4">
          <a class="btn mx-auto" href="/manifesto">
            Read more
          </a>
        </div>
      </Section>

      <Section title="Schedule">
        <ul class="list-disc list-outside pl-6">
          <li class="text-lg">ETHTokyo week&nbsp;:&nbsp;Sep 19-27, 2026</li>
          <ul class="list-disc list-outside pl-4 mb-6">
            {scheduleItems.map((item) => (
              <li key={item.href}>
                <ExternalLink href={item.href}>{item.label}</ExternalLink>
                &nbsp;:&nbsp; {item.date}
              </li>
            ))}
          </ul>
        </ul>

        <div class="max-w-3xl mx-auto">
          <h3 class="font-bold text-center text-2xl pb-5">Get Involved</h3>
          <div class="flex items-center justify-center">
            {involvementLinks.map((item) => (
              <ActionLink key={item.href} href={item.href} icon={item.icon}>
                {item.label}
              </ActionLink>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Access">
        <div class="flex flex-col gap-6">
          <div>
            <h4 class="font-bold text-lg mb-2">✈️ Traveling to Tokyo</h4>
            <div>
              Tokyo has two airports:&nbsp;
              <ExternalLink href="https://maps.app.goo.gl/pEzYqQj1HuTY3ctD7">
                Narita International Airport (NRT)
              </ExternalLink>
              &nbsp;and&nbsp;
              <ExternalLink href="https://maps.app.goo.gl/C1rgT7mBmtXzULy68">
                Haneda International Airport (HND)
              </ExternalLink>
              . They are both well connected with the railway system.
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-2">🚇 Urban Transportation</h4>
            <div class="flex flex-col gap-4">
              <p>
                Tokyo is a city optimized for public transportation. Most of the
                times, the quickest and easiest way to getting from A to B is by
                trains and buses. If you are staying longer than just a few
                days, you might want to consider purchasing a&nbsp;
                <ExternalLink href="https://www.jreast.co.jp/multi/en/pass/suica.html">
                  SUICA
                </ExternalLink>
                &nbsp;or&nbsp;
                <ExternalLink href="https://www.pasmo.co.jp/visitors/en/">
                  PASMO
                </ExternalLink>
                &nbsp; card at for the best experience, which can be obtained at
                pretty much any train station. You can use these cards to ride
                the buses also.
              </p>
              <p>
                <strong>🛴 Scooters & Bikes</strong> : Depending on the area,
                you will also find scooters and bikes that you can grab around
                the city, using apps like{" "}
                <ExternalLink href="https://play.google.com/store/apps/details?id=sc.luup.luup">
                  LUUP
                </ExternalLink>
                &nbsp;and&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.limebike">
                  LIME
                </ExternalLink>
                . You should take precaution to stay safe since the streets in
                Tokyo are generally narrow and crowded.
              </p>
              <p>
                <strong>🚖 Taxis</strong> : Taxis are available through apps
                like&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.dena.automotive.taxibell">
                  GO
                </ExternalLink>
                &nbsp;and&nbsp;
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.ubercab">
                  Uber
                </ExternalLink>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div class="w-full pt-8 pb-9">
        <PastEvents />
      </div>
    </Layout>
  );
};

export default TopPage;
