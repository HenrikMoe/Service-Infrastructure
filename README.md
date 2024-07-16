# Service-Infrastructure

Service infrastructure for  https://jinsei.ai.

# Branches

## Authority Services

SEC EDGAR API - EdgarPack - Upload filings, retrieve filings
https://www.sec.gov/files/edgar/filermanual/efmvol1.pdf
https://www.sec.gov/files/edgar/filermanual/archive/efmvol2.pdf
sec solution engine
The SEC accepts electronic submissions on EDGAR Monday through Friday, except federal holidays, from 6 a.m. to 10 p.m. Eastern Time. See also Rule 12 of Regulation S-T, 17 CFR 232.12. Rule 13 of Regul
form-id 
https://www.sec.gov/page/edgar-how-do-i-prepare-and-submit-my-form-id-application
 https://www.filermanagement.edgarfiling.sec.gov/filermgmt/selectFormId.html
get online notarization tool

IXBRL Edgar Uptake- The Inline XBRL document format is based on HTML and can be viewed in a browser and used in all the same ways that an HTML document can be viewed and used. As compared to HTML, however, an Inline XBRL document contains additional XML elements and XML attributes that allow the document to be validated and processed as an XBRL instance document. As a result, filers that submit an Inline XBRL document are not required to submit a separate instance document as described in Chapter 6, “Interactive Data,” and EDGAR will not accept an Inline XBRL document that includes a separate instance document in the submission process.

A submission may have more than one attached document formatted using Inline XBRL. Inline XBRL formatted attachments are processed and validated together as an Inline XBRL Document Set (IXDS), as defined by section 3.1 of the Inline XBRL 1.1 Specification, producing a single target instance document. For submissions with an Inline XBRL attachment, all references to “official HTML/ASCII document” in Chapter 6 should be read as “IXDS” All of the validations that apply in Chapter 6 apply to the target instance document.

The Discoverable Taxonomy Set (DTS) of an instance document is the set of all schemas and linkbases that are found by following all URI links and references.

135 rules from xbrl-us  - data quality committee github https://github.com/DataQualityCommittee/dqc_us_rules
they sit in a gh repo sec uses a subset 
the xule editor works with all these rules 
instance references the taxonmy that uses the linkbases 
those rules are used in the us gaap taxonmy - some subset 
viewer for the dqc rules taxonmy and the us gaap https://xbrl.us/xbrl-taxonomy/2024-us-gaap/
edgar filing portal 
https://xbrl.us/xbrl-reference/tdh/
how do xbrl instances have permission and access to ns uri? what requests are made by the edgar to the ns uri

ESMA - EUROPack - Upload filings, retrieve filings

## Report Envs:

SBRM - SBRM - fasb subset -populate SBRM with aspects and facts. AI transformation silos
EDGAR ESMA

MiCa ViCa  - MicaVica - populate euro web3 asset tracking filing specs' aspects and facts, via ixbrl whitepapers. AI transformation silos 
EDGAR ESMA

ACTUS - ACTUS - all encompassing financial product modeler (about 100 of every fin product today)
COMMERCIAL ANALYSIS 

SOC - usbank e&y audit and internal audits - soc 1 and soc2 audits - has to be a cpa firm - soc 2 is a service to service bank - soc 1 is from a financial statement perepsective 
pcidss - verizon team for that audit 
UNKNOWN

K1 - Double audit and accounting interest check 
K1 generation for huge entity webs
Real estate returns 
Non profit reporting 
Roll forward 
Deloitte tax portal 
Tax intella store documentation info requests users deadlines 
Client make requests to their end client 
Import templates 
Then line items get assigned 
Variance report 
K1s foreign reporting footnote generation - elections, rules for allocations
Template this is this type of entity w features and special thing generates footnotes for k1s 
That is for overaching entity level and that needs to be distributes 
Reports for each partner entitled go thru the packs  
Roll forward - an element its rolling specs 
Accured notes - outstanding debt can roll forward too so it is structure and fact 
EDGAR


FASB 2024 Taxonomy - https://xbrlview.fasb.org/yeti/resources/yeti-gwt/Yeti.jsp#tax~(id~174*v~10231)!con~(id~5273661)!net~(a~3474*l~832)!lang~(code~en-us)!path~(g~99019*p~0_0)!rg~(rg~32*p~12)
EDGAR


Ferc Energy Credit Audits
UNKNOWN

## Visuals and Integrated Commericial Envs 

NewName - Jinsei Luciano Legacy -  Services, Active Package, APIs, Canvas, services only goes one level down. it has report packages, api code bases, and deployed services in hosted or ci/cd/imagineered packages listed to be selected then shown in active package. 

ok your k1s listed above, your k1 links visual file above on the left side (which when clicked goes into the viewer not the active fs), yur k1 final pack, k1 xbrl packs, all listed together, then they get clicked on and it is in the active fs below (all left)

the right side has the report file infromation and above that is the API connections to company apis and jinsei transformers listed as named services and when clicked they display below as service pipelines with like active status and endpoint creation with the transformers via the ui with modals, so you can be like hey myservice1 call xuri1, 2, and 3 into jinsei.ai-mypersonalk1transformer and connect the dozen type output set with jinsei.ai-mypersonalsecedgarfiler 

declare the data states in a npm compat file

use some sort of declaritive instantion component hook component wrap from npm import should just be able to call in the ui component - redux? 

Api pack to the services - every transformer is its own subpack - called in the state instantion add on config 

Jinsei API - API transformer listing with publically and privately avialble trainig data displayed with perofmrance analytics - 
Specs doc for designer: https://docs.google.com/document/d/1-msOp2yvxAZJnFdpXi0jH3BZSJShm_2GWBC9O5tE4vY/edit

ACTUS and Edgar report taxonomies will be available for request over hosted JINSEI API with a key of course

# Hardware

https://taggartinstitute.org/p/the-homelab-almanac

# Software

Applications:

## Neural Net Envs
 - graph element , nix , part of transfomer subpack

## Security/IAM Management 
- graph edge management / nix , enterprise pack
- transfomer packs have enterprise pack interface

## Visualization User Interface
- graph query assembly pack

## Env Management
- graph domain management, opentofu packs, staging and replications

# Evaluation

Application and per unit resuability projections

# Audited Security

Soc checklists

# Data

Tokenized actus product list
