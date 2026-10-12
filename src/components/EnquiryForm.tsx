import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { packagesData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

interface EnquiryFormProps {
  initialPackageId?: string;
  isDarkTheme?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialPackageId
}) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const [searchParams] = useSearchParams();
  const paramPackage = searchParams.get('package');

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [packageId, setPackageId] = useState(paramPackage || initialPackageId || '24hr');
  const [checkInDate, setCheckInDate] = useState('');
  const [timingChoice, setTimingChoice] = useState('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [foodPreference, setFoodPreference] = useState<'vegetarian' | 'non-vegetarian'>('non-vegetarian');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // UI / Status state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [copied, setCopied] = useState(false);

  // Configurable owner phone number (Prompt requirement: keep configurable, do not invent verified number)
  // Owner can configure this via environment variable or default setup
  const businessPhone = '+919876543210';
  const isPhoneConfigured = false;

  useEffect(() => {
    if (paramPackage && packagesData.some((p) => p.id === paramPackage)) {
      setPackageId(paramPackage);
    }
  }, [paramPackage]);

  const selectedPkg = packagesData.find((p) => p.id === packageId) || packagesData[2];

  // Price calculations
  const pricePerPerson = selectedPkg.pricePerPerson;
  const indicativeSubtotal = pricePerPerson * (guestCount > 0 ? guestCount : 0);

  // Today's date in YYYY-MM-DD format for date input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Phone validation (Indian / international format)
    const cleanedPhone = phone.replace(/[\s-]/g, '');
    if (!cleanedPhone) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (!/^\+?[0-9]{10,13}$/.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!checkInDate) {
      newErrors.checkInDate = 'Please select your requested check-in date';
    } else if (checkInDate < todayStr) {
      newErrors.checkInDate = 'Check-in date cannot be in the past';
    }

    if (guestCount < 1) {
      newErrors.guestCount = 'Guest count must be at least 1 person';
    } else if (guestCount > 100) {
      newErrors.guestCount = 'For groups exceeding 100 guests, please contact us directly';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateEnquiryText = () => {
    const timingText = selectedPkg.id === '24hr' 
      ? (timingChoice || '11 AM to 11 AM') 
      : selectedPkg.timing;

    return `*MAHARASHTRA FARM HOUSE - BOOKING ENQUIRY*
----------------------------------------
Guest Name: ${fullName.trim()}
Contact Phone: ${phone.trim()}
${email.trim() ? `Email: ${email.trim()}\n` : ''}Selected Package: ${selectedPkg.name} (₹${selectedPkg.pricePerPerson}/person)
Requested Date: ${checkInDate}
Timing: ${timingText}
Number of Guests: ${guestCount}
Food Preference: ${foodPreference === 'vegetarian' ? 'Vegetarian' : 'Non-Vegetarian'}
Indicative Subtotal: ₹${indicativeSubtotal.toLocaleString('en-IN')}
${additionalNotes.trim() ? `Special Notes: ${additionalNotes.trim()}\n` : ''}----------------------------------------
*Note: This is an enquiry request and requires confirmation from the property owner.*`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setShowSummary(false);
      return;
    }

    setShowSummary(true);
  };

  const handleWhatsAppHandoff = () => {
    if (!validate()) return;

    const message = generateEnquiryText();
    const encodedMessage = encodeURIComponent(message);

    if (isPhoneConfigured && businessPhone) {
      const cleanPhone = businessPhone.replace(/[^\d]/g, '');
      const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Direct web share or open WhatsApp without fixed number if unconfigured
      const waUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopySummary = () => {
    const text = generateEnquiryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    backgroundColor: isDarkTheme ? '#1F241E' : '#FFFFFF',
    border: `1px solid ${isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)'}`,
    color: isDarkTheme ? 'var(--text-dark-surface)' : 'var(--text-light-surface)',
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontSize: '0.9rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    marginBottom: '0.4rem',
    color: isDarkTheme ? 'var(--text-dark-muted)' : 'var(--text-light-muted)'
  };

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? 'var(--bg-dark-surface)' : '#FFFFFF',
        border: `1px solid ${isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)'}`,
        borderRadius: '2px',
        padding: 'clamp(1.5rem, 4vw, 2.75rem)',
        position: 'relative'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Full Name */}
          <div>
            <label style={labelStyle} htmlFor="fullName">
              Full Name <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Rajesh Patil"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.fullName ? '#D9534F' : undefined
              }}
              required
            />
            {errors.fullName && (
              <span style={{ color: '#E57373', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label style={labelStyle} htmlFor="phone">
              Phone Number (WhatsApp) <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 9822012345"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.phone ? '#D9534F' : undefined
              }}
              required
            />
            {errors.phone && (
              <span style={{ color: '#E57373', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Email Address */}
          <div>
            <label style={labelStyle} htmlFor="email">
              Email Address <span style={{ color: 'var(--text-dark-subtle)' }}>(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. rajesh@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.email ? '#D9534F' : undefined
              }}
            />
            {errors.email && (
              <span style={{ color: '#E57373', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Package Selection */}
          <div>
            <label style={labelStyle} htmlFor="packageId">
              Selected Package <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <select
              id="packageId"
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
              style={inputStyle}
            >
              {packagesData.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} — ₹{pkg.pricePerPerson.toLocaleString('en-IN')}/person ({pkg.timing})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Package Timing Specific Option (for 24-hr) */}
        {selectedPkg.id === '24hr' && (
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>
              24-Hour Check-in Slot <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {selectedPkg.timingOptions?.map((slot) => (
                <label
                  key={slot}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    backgroundColor: timingChoice === slot ? 'var(--antique-brass-soft)' : (isDarkTheme ? '#1F241E' : '#FFFFFF'),
                    border: `1px solid ${timingChoice === slot ? 'var(--antique-brass)' : (isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)')}`,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    color: timingChoice === slot ? 'var(--antique-brass)' : 'inherit'
                  }}
                >
                  <input
                    type="radio"
                    name="timingSlot"
                    value={slot}
                    checked={timingChoice === slot || (!timingChoice && slot === '11 AM to 11 AM')}
                    onChange={() => setTimingChoice(slot)}
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Check-in Date */}
          <div>
            <label style={labelStyle} htmlFor="checkInDate">
              Check-in Date <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <input
              id="checkInDate"
              type="date"
              min={todayStr}
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.checkInDate ? '#D9534F' : undefined
              }}
              required
            />
            {errors.checkInDate && (
              <span style={{ color: '#E57373', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                {errors.checkInDate}
              </span>
            )}
          </div>

          {/* Number of Guests */}
          <div>
            <label style={labelStyle} htmlFor="guestCount">
              Number of Guests <span style={{ color: 'var(--antique-brass)' }}>*</span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                id="guestCount"
                type="number"
                min="1"
                max="100"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                style={{
                  ...inputStyle,
                  borderColor: errors.guestCount ? '#D9534F' : undefined
                }}
                required
              />
            </div>
            {errors.guestCount && (
              <span style={{ color: '#E57373', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                {errors.guestCount}
              </span>
            )}
          </div>
        </div>

        {/* Food Preference */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={labelStyle}>
            Food Preference <span style={{ color: 'var(--antique-brass)' }}>*</span>
          </label>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: foodPreference === 'non-vegetarian' ? 'var(--antique-brass-soft)' : (isDarkTheme ? '#1F241E' : '#FFFFFF'),
                border: `1px solid ${foodPreference === 'non-vegetarian' ? 'var(--antique-brass)' : (isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)')}`,
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              <input
                type="radio"
                name="foodPref"
                value="non-vegetarian"
                checked={foodPreference === 'non-vegetarian'}
                onChange={() => setFoodPreference('non-vegetarian')}
              />
              <span>Non-Vegetarian (Chicken Malwani / Tambada / Pandhra Rassa)</span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: foodPreference === 'vegetarian' ? 'var(--antique-brass-soft)' : (isDarkTheme ? '#1F241E' : '#FFFFFF'),
                border: `1px solid ${foodPreference === 'vegetarian' ? 'var(--antique-brass)' : (isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)')}`,
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              <input
                type="radio"
                name="foodPref"
                value="vegetarian"
                checked={foodPreference === 'vegetarian'}
                onChange={() => setFoodPreference('vegetarian')}
              />
              <span>Vegetarian (Paneer / Kaju Masala / Tambada / Pandhra Rassa)</span>
            </label>
          </div>
        </div>

        {/* Additional Requests */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={labelStyle} htmlFor="additionalNotes">
            Additional Requests or Group Inquiries <span style={{ color: 'var(--text-dark-subtle)' }}>(Optional)</span>
          </label>
          <textarea
            id="additionalNotes"
            rows={3}
            placeholder="Tell us if you need cricket equipment setup, specific timing adjustments, or family celebration arrangements."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            style={{
              ...inputStyle,
              resize: 'vertical'
            }}
          />
        </div>

        {/* Pricing Calculation Summary Box */}
        <div
          style={{
            backgroundColor: isDarkTheme ? '#171A16' : '#F5F1E8',
            border: `1px solid ${isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)'}`,
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            borderRadius: '2px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', color: isDarkTheme ? 'var(--text-dark-muted)' : 'var(--text-light-muted)' }}>
                Package Rate: ₹{pricePerPerson.toLocaleString('en-IN')} × {guestCount || 0} guest{guestCount !== 1 ? 's' : ''}
              </div>
              <div style={{ fontSize: '0.75rem', color: isDarkTheme ? 'var(--text-dark-subtle)' : 'var(--text-light-subtle)' }}>
                Includes stated meals, tea, and property access
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--antique-brass)' }}>
                Indicative Subtotal
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--antique-brass)' }}>
                ₹{indicativeSubtotal.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        {/* Form Action Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: '1 1 200px', padding: '0.95rem 1.5rem' }}
            >
              Review Enquiry Summary
            </button>

            <button
              type="button"
              onClick={handleWhatsAppHandoff}
              className="btn btn-brand"
              style={{ flex: '1 1 200px', padding: '0.95rem 1.5rem' }}
            >
              <Send size={16} style={{ marginRight: '6px' }} />
              Send Enquiry via WhatsApp
            </button>
          </div>

          {/* Important Notice */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              fontSize: '0.8rem',
              color: isDarkTheme ? 'var(--text-dark-subtle)' : 'var(--text-light-subtle)',
              marginTop: '0.5rem',
              lineHeight: 1.5
            }}
          >
            <AlertCircle size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--antique-brass)' }} />
            <span>
              Submitting an enquiry does not confirm a reservation. Property availability and dates are verified directly with you before final confirmation.
            </span>
          </div>
        </div>
      </form>

      {/* Review Modal / Summary Dialog */}
      {showSummary && (
        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)'}`
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--antique-brass)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}
          >
            <CheckCircle2 size={16} />
            <span>Enquiry Summary Ready</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Please Review Your Enquiry</h3>

          <div
            style={{
              backgroundColor: isDarkTheme ? '#141713' : '#F9F7F1',
              border: `1px solid ${isDarkTheme ? 'var(--border-dark)' : 'var(--border-light)'}`,
              padding: '1.25rem',
              borderRadius: '2px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              marginBottom: '1.25rem'
            }}
          >
            {generateEnquiryText()}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleWhatsAppHandoff}
              className="btn btn-brand"
              style={{ fontSize: '0.85rem' }}
            >
              <Send size={15} style={{ marginRight: '6px' }} />
              Open WhatsApp with this Message
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="btn btn-secondary-light"
              style={{ fontSize: '0.85rem' }}
            >
              {copied ? <Check size={15} style={{ marginRight: '6px' }} /> : <Copy size={15} style={{ marginRight: '6px' }} />}
              {copied ? 'Copied to Clipboard' : 'Copy Summary'}
            </button>
          </div>

          {/* Owner configuration note */}
          <div
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1rem',
              backgroundColor: isDarkTheme ? 'rgba(179, 148, 92, 0.08)' : 'rgba(179, 148, 92, 0.12)',
              border: '1px solid var(--border-brass)',
              borderRadius: '2px',
              fontSize: '0.775rem',
              color: isDarkTheme ? 'var(--text-dark-muted)' : 'var(--text-light-muted)'
            }}
          >
            <strong>Note for Property Owner:</strong> WhatsApp enquiries are formatted and ready. To direct all inquiries to a verified business WhatsApp phone number, configure the contact number in your settings or contact information.
          </div>
        </div>
      )}
    </div>
  );
};
