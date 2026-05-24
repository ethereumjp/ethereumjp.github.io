import StaticPage from "@/components/pages/StaticPage";

const PrivacyPolicyPage = () => (
  <StaticPage title="Privacy Policy">
    <div class="px-4 flex flex-col gap-8">
      <p>
        <strong>Last updated:</strong> [2025-12-27]
      </p>
      <section>
        <p>
          ETHTokyo (“we”, “us”, or “the event”) respects your privacy. This
          Privacy Policy explains what information we collect, how we use it,
          and your rights regarding your personal data when you visit{" "}
          <strong>https://ethtokyo.org</strong> or participate in
          ETHTokyo-related activities.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">1. Information We Collect</h2>
        <p>
          We only collect personal data that you voluntarily provide to us. This
          may include:
        </p>
        <ul>
          <li>
            <strong>Email address</strong> — When you sign up for event updates,
            register for the event, or contact us.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect personal data automatically beyond
          what is technically required to operate the event.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">2. How We Use Your Information</h2>
        <p>
          We use the collected information solely for the following purposes:
        </p>
        <ul class="list-disc px-6">
          <li>Communicating event-related information</li>
          <li>Sending important updates or announcements</li>
          <li>Responding to inquiries and support requests</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal data to third parties,
          unless required by law.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">3. Third-Party Services</h2>
        <p>We may use third-party services for basic operations such as:</p>
        <ul class="list-disc px-6">
          <li>Website hosting</li>
          <li>Email delivery</li>
          <li>Event registration tools</li>
        </ul>
        <p>
          These services may process limited data (such as email addresses or IP
          addresses) only as necessary to provide their functionality and in
          accordance with their own privacy policies.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">4. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to operate the
          event and communicate with participants.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">5. Your Rights</h2>
        <p>You will reserve the right at all times to:</p>
        <ul class="list-disc px-6">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the details below.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">6. Data Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your data. However, no method of transmission over the internet is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page. Continued use of the website after changes
          constitutes acceptance of the updated policy.
        </p>
      </section>
      <section>
        <h2 class="font-bold text-lg mb-2">8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy or how your data
          is handled, please contact us at:
        </p>
        <p>privsec [at] ethtokyo.org</p>
      </section>
    </div>
  </StaticPage>
);

export default PrivacyPolicyPage;
