import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ConditionTerms = () => {
  const backButton = <FontAwesomeIcon icon={faChevronLeft} />;
  return (
    <div className=" max-w-[1200px] mx-auto">
      <Link to="/">
        <button>{backButton} Back</button>
      </Link>

      <h2 className="text-2xl font-bold">Terms of Service</h2>
      <h5 className="text-sm font-semibold mt-2">
        Last Revised: December 16, 2013
      </h5>
      <p className="text-sm mt-2">
        Welcome to www.emart.info. This site is provided as a service to our
        visitors and may be used for informational purposes only. Because the
        Terms and Conditions contain legal obligations, please read them
        carefully.
      </p>
      <h2 className="text-sm font-semibold mt-2">1. YOUR AGREEMENT</h2>
      <p className="text-sm">
        By using this Site, you agree to be bound by, and to comply with, these
        Terms and Conditions. If you do not agree to these Terms and Conditions,
        please do not use this site. PLEASE NOTE: We reserve the right, at our
        sole discretion, to change, modify or otherwise alter these Terms and
        Conditions at any time. Unless otherwise indicated, amendments will
        become effective immediately. Please review these Terms and Conditions
        periodically. Your continued use of the Site following the posting of
        changes and/or modifications will constitute your acceptance of the
        revised Terms and Conditions and the reasonableness of these standards
        for notice of changes. For your information, this page was last updated
        as of the date at the top of these terms and conditions.
      </p>
      <h2 className="text-sm font-semibold mt-2">2. PRIVACY</h2>
      <p className="text-sm">
        Please review our Privacy Policy, which also governs your visit to this
        Site, to understand our practices.
      </p>
      <h2 className="text-sm font-semibold mt-2">3. LINKED SITES</h2>
      <p className="text-sm">
        This Site may contain links to other independent third-party Web sites
        ("Linked Sites"). These Linked Sites are provided solely as a
        convenience to our visitors. Such Linked Sites are not under our
        control, and we are not responsible for and does not endorse the content
        of such Linked Sites, including any information or materials contained
        on such Linked Sites. You will need to make your own independent
        judgment regarding your interaction with these Linked Sites.
      </p>
      <h2 className="text-sm font-semibold mt-2">
        4. FORWARD LOOKING STATEMENTS
      </h2>
      <p className="text-sm">
        All materials reproduced on this site speak as of the original date of
        publication or filing. The fact that a document is available on this
        site does not mean that the information contained in such document has
        not been modified or superseded by events or by a subsequent document or
        filing. We have no duty or policy to update any information or
        statements contained on this site and, therefore, such information or
        statements should not be relied upon as being current as of the date you
        access this site.
      </p>
    </div>
  );
};

export default ConditionTerms;
