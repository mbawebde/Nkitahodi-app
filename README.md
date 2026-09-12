Nkitahodi

A documentary network of collaboration among Ghanaian language-technology organisations, 2021–2026. 

A case of analyzing how knowledge and technology partnerships are documented and connected.



# Live Demo

[View the live app](https://nkitahodi-app.vercel.

# Summary
Nkitahodi is a web application that documents public collaboration among Ghanaian language-technology
organisations for **2021-2026**.
Each organisation is a node.
An undirected link is recorded only when both organisations are named together in an eligible public source. 

The result is an inspectable map of the **public documentary record** .
# Research framing
This project sits at the intersection of **data science / network analysis** and **knowledge and technology transfer**: it shows how organisations working on
Ghanaian language technology appear together in public sources (papers, official publications, grants, and national AI strategy).
It is built as a concrete research and professional artifact withinclusion rules, reported graph
measures, and an interface.

# Inclusion criteria
A link is included only when
**both** organisations appear in one of the following:
1. a peer-reviewed paper
2. an official laboratory or ministry publication
3. a documented grant award
4. the National Artificial Intelligence Strategy of the Republic of Ghana (launched 24
April 2026)
If a relationship is not evidenced in a source of this type, it does not appear on the map.

# Scope and limitations
**In scope**
- Organisations named in eligible public documents
- Announcements of speech and text language resources
- Institutional host ties and project ties when they are documented
**Out of scope**
- Estimates of classroom, farm, or market adoption
- Collection or storage of audio files or parallel corpora
- Inference about informal or unpublished collaboration
The study codes documents that
**announce** speech and text resources. It does not ingest those resources.

# Current graph (working record)
  Measure | Value| 
- Organisations | 24 |
- Public links | 30 |
- Connected components | 2 |
- Clustering coefficient | 0.676 |
- Mean geodesic distance (reachable pairs) | 2.110 |
- Mean partners per organisation | 2.50 |

**Roles**

Role Count
-----:
Producer | 20 |
Intermediate | 2 |
| User | 2 |

**Components**

Component | Organisations |
- Main | 14 |
- Isolated | 10 |

These quantities describe the public record as coded. They do not measure end-user uptake.

# Features
- Network views: circular layout, clusters, and geography
- Organisation picker with cited neighbourhood, neighbourhood clustering coefficient, mean geodesic distance among neighbours, and the admitting source of each link
- Language tags (including
Akan/Twi, Ewe, Dagbani, Dagaare, Ikposo, Ga, Fante, Kusaal, Gurene, Hausa)
- Role encoding: square = producer; diamond =
intermediate; circle = user
- Edge encoding: solid = project tie; dashed = institutional host tie

# How to use
1. Open (https://nkitahodi-app.vercel.app).
2. Explore the network view (circular, clusters, or geography) .
3. Select an organisation from the list or the figure.
4. Review its cited partners, neighbourhood measures, and source of each public link.






