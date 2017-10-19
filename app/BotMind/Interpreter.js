class Patterns {
  static forName() {
    return [
      /My\s+name\s+is\s+([A-zÁ-ÿ]+)/i,
      /I\s+am\s+([A-zÁ-ÿ]+)/i,
      /I'm\s+([A-zÁ-ÿ]+)/i,
      /Im\s+([A-zÁ-ÿ]+)/i,
      /This\s+is\s+([A-zÁ-ÿ]+)/i,
      /(hello|hi|hey)\W?\s+My\s+name\s+is\s+([A-zÁ-ÿ]+)/i,
      /(hello|hi|hey)\W?\s+I\s+am\s+([A-zÁ-ÿ]+)/i,
      /(hello|hi|hey)\W?\s+I'm\s+([A-zÁ-ÿ]+)/i,
      /(hello|hi|hey)\W?\s+Im\s+([A-zÁ-ÿ]+)/i,
      /(hello|hi|hey)\W?\s+This\s+is\s+([A-zÁ-ÿ]+)/i,
      /(?!^hello$|^hi$|^hey$)\s*([A-zÁ-ÿ]+)/i,
    ]
  }

  static forCompany() {
    return [
      /My\s+company\s+is\s+(\.+)/i,
      /My\s+startup\s+is\s+(\.+)/i,
      /I\s+work\s+at\s+(\.+)/i,
      /It's\s+(\.+)/i,
      /Its\s+(\.+)/i,
      /It\s+is\s+(\.+)/i,
      /It's\s+called\s+(\.+)/i,
      /Its\s+called\s+(\.+)/i,
      /It\s+is\s+called\s+(\.+)/i,
      /(?!^it is$|^its$|^it's$)\s*([A-zÁ-ÿ]+\s*[A-zÁ-ÿ]*)/i,
    ]
  }

  static forEmail() {
    return [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ]
  }
}

class Finder {
  static name(text) {
    let findings = [];

    Patterns.forName().forEach((pattern) => {
      const rawFindings = text.match(pattern);
      findings.push(rawFindings && rawFindings[rawFindings.length-1]);
    });
    return findings;
  }

  static company(text) {
    let findings = [];

    Patterns.forCompany().forEach((pattern) => {
      const rawFindings = text.match(pattern);
      findings.push(rawFindings && rawFindings[rawFindings.length-1]);
    });
    return findings;
  }

  static email(text) {
    let findings = [];

    Patterns.forEmail().forEach((pattern) => {
      const rawFindings = text.match(pattern);

      findings.push(rawFindings && rawFindings[0]);
    });

    return findings;
  }
}


export default Finder