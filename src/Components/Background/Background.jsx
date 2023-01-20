import React from "react";
import "./Background.css";
import greencheck from "../../data/AboutpageData/greencircle.png";

export default function Background() {
  return (
    <div className="background-outer">
      <div className="background-container">
        <p className="background-header">Background</p>
        <p className="background-intro">
          Your privacy rights with relation to our collection, use, storage,
          sharing, and protection of your personal information are outlined in
          this Privacy Statement. It holds true regardless of how you access or
          utilize the klnwash.com website and all associated websites,
          applications, services, and resources. When you register for, access,
          or use our services, material, features, technologies, or functions
          made available on our website and all linked sites, applications, and
          services (collectively, "Laundry Care Services"), you agree to the
          terms of this privacy statement.We reserve the right to update this
          policy at any moment by publishing a new version on our website. The
          updated version will take effect when it is posted. Additionally, if
          the amended version contains a significant change, we will email you a
          notice of the change 30 days ahead to the change at the email address
          you supplied when signing up for the service.
        </p>

        <p className="background-header">What information do we collect?</p>
        <p className="background-intro">
          Your contact information, including your address, phone number, and
          email address as well as your financial information, are freely
          provided to us when you sign up for service through the klnwash.com
          website. We gather your data so we can deliver pick-up and delivery
          services accurately and so we can get in touch with you about your
          laundry needs. In the event that you open a Laundry Care account, we
          might gather the following kinds of data: Information that can be used
          to contact you, including your name, address, phone number, and email
          address. Financial data that you provide to us when you utilize
          laundry care services, such as the complete bank account numbers
          and/or credit card numbers.specific washing requirements for your
          clothing. Specific washing requirements for your clothing. You have
          the option to grant us access to some personal data kept by third
          parties, including social media websites (e.g., Facebook and Twitter).
          When you willingly "like" our Facebook page or "follow" our Twitter
          page, this is done. The data we might get differs from site to site
          and is managed by that particular site. You agree that Kln Wash may
          collect, retain, and use this information in accordance with this
          Privacy Policy by linking an account operated by a third party with
          your Kln Wash account and giving Kln Wash access to this information.
        </p>

        <p className="background-header">How do we use your information?</p>
        <p className="background-policy">
          The term "personal information" refers to information that can be
          connected to and used to identify a specific individual throughout
          this policy. Information that has been rendered anonymous so that it
          cannot be used to identify a specific user is not regarded by us as
          personal information. On our US-based systems, we store and process
          your personal data. We utilize administrative, technological, and
          physical security measures to safeguard your information against loss,
          misuse, unauthorized access, disclosure, and alteration. Physical
          access controls and information access authorization controls are a
          couple of the precautions we employ.
        </p>

        <div className="background-terms">
          <div className="background-term">
            <img src={greencheck} alt="bullet point" />
            <p>
              Give you the services we agreed to in line with our terms and
              conditions.
            </p>
          </div>
          <div className="background-term">
            <img src={greencheck} alt="bullet point" />
            <p>
              Send you messages about your account and other services you use if
              you get in touch, or we need to tell you about something
            </p>
          </div>
          <div className="background-term">
            <img src={greencheck} alt="bullet point" />
            <p>
              Exercise our rights under contracts we’ve entered into with you,
              like managing, collecting and recovering money you owe us.
            </p>
          </div>
          <div className="background-term">
            <img src={greencheck} alt="bullet point" />
            <p>Investigate and resolve complaints and other issues.</p>
          </div>
        </div>

        <p className="background-header">
          Who do we share your information with?
        </p>
        <p className="background-intro">
          We may share your personal information with: Kln Wash Service
          providers – individuals who provide laundry service to you or your
          business. Service providers who help with our business operations such
          as fraud prevention, accounting, marketing and technology services.
          these service providers only use your information in connection with
          the services they perform for us and not for their own benefit. Credit
          bureaus and collection agencies to report account information, as
          permitted by law. Companies that we plan to merge with or are acquired
          by. (Should such a combination occur, we will require that the new
          combined entity follow this privacy policy with respect to your
          personal information. If your personal information could be used
          contrary to this policy, you will receive prior notice.) Law
          enforcement, government officials, or other third parties pursuant to
          a subpoena, court order, or other legal process or requirement
          applicable to Laundry Care or one of its affiliates; when we need to
          do so to comply with law or credit card rules; or when we believe, in
          our sole discretion, that the disclosure of personal information is
          necessary to prevent physical harm or financial loss, to report
          suspected illegal activity or to investigate violations of our Terms
          of Service. Other third parties with your consent or direction to do
          so. Kln Wash will not sell or rent any of your personal information to
          third parties for their marketing purposes and only shares your
          personal information with third parties as described in this policy.
          Kln Wash will not sell or rent any of your personal information to
          third parties for their marketing purposes and only shares your
          personal information with third parties as described in this policy.
        </p>

        <p className="background-header">When do we delete your data?</p>
        <p className="background-intro">
          We keep your information as long as you are a Kuda customer and for
          any additional period as required under applicable law or regulations
        </p>
        <p className="background-policy">
          These retention requirements supersede any right to erasure requests
          under applicable data protection laws. We cannot therefore erase your
          data in relation to your Kuda Account until after this time period,
          however we can assure you that your data will be held safely and
          securely whilst under our supervision.
        </p>

        <p className="background-header">What are your rights?</p>
        <p className="background-intro">
          We keep your information as long as you are a Kuda customer and for
          any additional period as required under applicable law or regulations
        </p>
        <p className="background-policy">
          These retention requirements supersede any right to erasure requests
          under applicable data protection laws. We cannot therefore erase your
          data in relation to your Kuda Account until after this time period,
          however we can assure you that your data will be held safely and
          securely whilst under our supervision.
        </p>
      </div>
    </div>
  );
}
