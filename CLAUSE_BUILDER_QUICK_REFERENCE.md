# CIMA Clause Builder - Quick Reference Card

## 🎨 Official CIMA Colors Used

```css
--burgundy:       #5A2633  /* Primary brand color */
--burgundy-dark:  #3D1A22  /* Headers, dark elements */
--burgundy-light: #6E3141  /* Hover states */
--gold:           #B49A67  /* Accents, highlights */
--white:          #F5F1E8  /* Backgrounds */
--light-gray:     #E8E4DC  /* Card backgrounds */
--gray:           #D1CEC7  /* Borders */
--dark-gray:      #6B6761  /* Icons */
--text-dark:      #252525  /* Primary text */
--text-light:     #4A4A4A  /* Secondary text */
```

## 📱 Mobile Breakpoints

| Device | Width | Key Changes |
|--------|-------|-------------|
| Desktop | 1024px+ | Full layout |
| Tablet | 768-1024px | Adjusted spacing |
| Mobile | 480-768px | Single column |
| Small | < 480px | Compact everything |

## 🔗 Access Points

- **URL**: `/clause-builder`
- **Navigation**: Header menu → "Clause Builder"
- **Direct Link**: `https://www.thecima.org/clause-builder`

## 📋 5-Step Process

1. **Terms & Conditions** - Accept disclaimer
2. **Clause Type** - Choose from 5 types
3. **Agreement Type** - Select from 30+ types
4. **Customization** - Configure details
5. **Review & Generate** - Get your clause

## 🎯 Core Features

### Clause Types
- ✅ Arbitration
- ✅ Mediation
- ✅ Med-Arb
- ✅ Arb-Med
- ✅ Escalation (Multi-tier)

### Customization Options
- 30+ jurisdictions
- 14 languages
- Arbitrator numbers
- Institutional rules
- Emergency provisions
- Time limits
- Confidentiality

### Output
- 📋 Copy to clipboard
- 💾 Download as .txt
- 👁️ Live preview
- ✏️ Professional formatting

## 🛠️ Tech Stack

- **Framework**: React 18
- **Styling**: Pure CSS (no external dependencies)
- **State**: React useState hooks
- **Icons**: Lucide React
- **No backend required** ✅

## 📁 File Structure

```
src/
├── pages/
│   ├── ClauseBuilder.jsx  (Main component)
│   └── ClauseBuilder.css  (Styling)
├── data/
│   └── clauseTemplates.js (Template logic)
└── App.jsx                (Route added)
```

## 🔧 Key Functions

```javascript
generateArbitrationClause(options)
generateMediationClause(options)
generateMedArbClause(options)
generateEscalationClause(options)
```

## ⚠️ Important Notes

1. **No Backend**: Pure frontend, zero server costs
2. **Official Colors Only**: Uses CIMA brand palette
3. **Mobile Optimized**: Works on all screen sizes
4. **Legal Disclaimers**: Comprehensive warnings included
5. **No AI Required**: Template-based generation

## 📊 Form Validation

- ✅ Terms acceptance required
- ✅ Clause type selection required
- ✅ Agreement type required
- ✅ Jurisdiction required
- ✅ Language required
- ⚠️ Can't proceed without required fields

## 🎨 Design Principles

1. **Brand Consistency**: Uses only CIMA colors
2. **Mobile-First**: Responsive on all devices
3. **Accessibility**: Clear labels, good contrast
4. **User-Friendly**: Intuitive wizard flow
5. **Professional**: Clean, modern interface

## 🚀 Deployment Ready

- [x] Build successful
- [x] No errors
- [x] Mobile tested
- [x] Colors validated
- [x] Routes configured
- [x] Documentation complete

## 📞 Support

- **Email**: info@thecima.org
- **Phone**: +233 0241 022 964
- **Guide**: `CLAUSE_BUILDER_GUIDE.md`
- **Updates**: `CLAUSE_BUILDER_COLORS_UPDATE.md`

## 🔄 Future Enhancements (Optional)

- [ ] AI-powered suggestions
- [ ] User accounts
- [ ] Saved templates
- [ ] PDF export
- [ ] Email delivery
- [ ] Multi-language UI
- [ ] Clause comparison

---

**Status**: ✅ Production Ready  
**Version**: 1.0  
**Last Updated**: 2026
